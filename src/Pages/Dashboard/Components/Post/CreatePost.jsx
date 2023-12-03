import React, { useEffect, useState } from 'react';
import * as S from '../../Style/Dashboard.style';
import TextInput from '../../../../Core/Inputs/TextInput';
import useMaterialForm from '../../../../Core/Hooks/useMaterialForm';
import { Divider } from '../../../../Components/Divider/Divider.style';
import { Button } from '../../../../Core/Components/Buttons/Button.style';
import ImageIcon from '@mui/icons-material/Image';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { snackbar } from '../../../../Core/Utils/Snackbar';
import { NotifierTypes } from '../../../../Core/Constants/Enums';
import { DashboardSagaActions } from '../../Store/Dashboard.saga';
import useHttpResponse from '../../../../Core/Hooks/useHttpResponse';
import Loading from '../../../../Core/Components/Loading/Loading';
import UserProfile from '../../../../Components/UserProfile/UserProfile';

const defaultValues = {
  value: '',
};

const CreatePost = () => {
  const dispatch = useDispatch();
  const [imageURL, setImageURL] = useState(null);
  const [compressedData, setCompressedData] = useState(null);
  const { authorizedUser } = useSelector(state => state.AppConfig.init);
  const { loading } = useSelector(state => state.Dashboard);
  const { registerHandler, form } = useMaterialForm({ defaultValues });

  const createPost = async () => {
    if (!form.getValues('value')) {
      dispatch(snackbar('You need to write a description or select an image, audio, attachment!', { variant: NotifierTypes.ERROR }));
      return;
    }

    const payload = {
      description: form.getValues('value'),
      user_id: authorizedUser.id,
      files: [compressedData]
    };
    dispatch(DashboardSagaActions.createPost(payload));
  };

  const compressImage = async (blobURL) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = blobURL;
  
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // const aspectRatio = img.width / img.height;

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.5);
        // canvas.toBlob((blob) => resolve(blob));
        resolve(compressedBase64);
      };
    });
  };

  const handleFiles = async (e) => {
    //* single image for now
    const file = e.target.files[0];
    
    const blobURL = URL.createObjectURL(file);
    const compressedBase64 = await compressImage(blobURL);
    setCompressedData(compressedBase64);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageURL(reader.result);
    };
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      form.reset(defaultValues);
      setImageURL(null);
      setCompressedData(null);
      idleAction();
    }
  }, DashboardSagaActions.createPost());

  return (
    <S.CreatePost>
      <div className="header">
        <UserProfile name={authorizedUser.name} clickable={false} src={authorizedUser.img} displayName={false} />
        <TextInput
          {...registerHandler('value')}
          placeholder="What's on your mind..."
          fullWidth
        />
      </div>
      { imageURL && <>
        <Divider margin="20px 0" />
        <img className="user-post-img" src={imageURL} alt="user-post" />
      </> }
      <div id="canvas"> </div>
      <Divider margin="20px 0" />
      <div className="tools">
        <Button
          startIcon={<ImageIcon />}
          bgColor="transparent"
          hoverBgColor="#333"
          hoverColor="#FFFFFF"
          $color="#7a7a7a"
          borderRadius="30px"
          component="label"
          onChange={handleFiles}
        >
          Image
          <input type="file" accept="image/*" />
        </Button>
        <Button
          startIcon={<AudioFileIcon />}
          bgColor="transparent"
          hoverBgColor="#333"
          hoverColor="#FFFFFF"
          $color="#7a7a7a"
          borderRadius="30px"
        >
          Music
        </Button>
        <Button
          startIcon={<MicIcon />}
          bgColor="transparent"
          hoverBgColor="#333"
          hoverColor="#FFFFFF"
          $color="#7a7a7a"
          borderRadius="30px"
        >
          Audio
        </Button>
        <Button
          startIcon={<AttachFileIcon />}
          bgColor="transparent"
          hoverBgColor="#333"
          hoverColor="#FFFFFF"
          $color="#7a7a7a"
          borderRadius="30px"
        >
          Attachment
        </Button>
        <Button
          endIcon={loading?.createPost ? <Loading size={20} /> : <SendIcon />}
          bgColor="#333"
          hoverBgColor="#555"
          $color="#927CD9"
          borderRadius="30px"
          onClick={createPost}
          disabled={loading?.createPost}
        >
          POST
        </Button>
      </div>
    </S.CreatePost>
  );
};

export default CreatePost;