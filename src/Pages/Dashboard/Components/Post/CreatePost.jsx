import React, { useState } from 'react';
import * as S from '../../Style/Dashboard.style';
import TextInput from '../../../../Core/Inputs/TextInput';
import useMaterialForm from '../../../../Core/Hooks/useMaterialForm';
import { Divider } from '../../../../Components/Divider/Divider.style';
import { Button } from '../../../../Core/Components/Buttons/Button.style';
import ImageIcon from '@mui/icons-material/Image';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { snackbar } from '../../../../Core/Utils/Snackbar';
import { NotifierTypes } from '../../../../Core/Constants/Enums';
import { DashboardSagaActions } from '../../Store/Dashboard.saga';
import useHttpResponse from '../../../../Core/Hooks/useHttpResponse';
import Loading from '../../../../Core/Components/Loading/Loading';
import UserProfile from '../../../../Components/UserProfile/UserProfile';
import LZString from 'lz-string';
import { Skeleton } from '@mui/material';

const defaultValues = {
  value: '',
};

const CreatePost = () => {
  const dispatch = useDispatch();
  const [imageURL, setImageURL] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [fileLoading, setFileLoading] = useState(false);
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
      files: [compressedFile]
    };
    dispatch(DashboardSagaActions.createPost(payload));
  };

  const compressFile = async (base64URL, fileType) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = base64URL;
  
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.5);
        resolve(compressedBase64);
      };
    });
  };

  const compressBase64 = (data) => {
    return new Promise(resolve => {
      const compressedData = LZString.compress(data);
      resolve(compressedData);
    });
  };

  const handleFiles = (e, fileType) => {
    //* single image for now
    const file = e.target.files[0];
    console.log(file, ' file');

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadstart = () => {
      setFileLoading(true);
    };
    reader.onloadend = async () => {
      const base64URL = reader.result;
      const compressedString = compressBase64(base64URL);
      console.log(base64URL, ' original elngth');
      console.log(base64URL.length, ' original elngth');
      // console.log(compressedString.length, ' lz-string length');
      // const compressedBase64 = await compressFile(reader.result, fileType);
      // console.log(compressedBase64.length, ' canvas');
      setCompressedFile(compressedString);
      setImageURL(reader.result);
      setFileLoading(false);
    };
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      form.reset(defaultValues);
      setImageURL(null);
      setCompressedFile(null);
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
      { 
        fileLoading
          ? <>
            <Divider margin="20px 0" />
            <Skeleton variant="rounded" animation="wave" className="img-skeleton" />
          </>
          : imageURL && <>
            <Divider margin="20px 0" />
            <img loading="lazy" className="user-post-img" src={imageURL} alt="user-post" />
          </>  
      }
      <Divider margin="20px 0" />
      <div className="tools">
        <Button
          startIcon={<ImageIcon />}
          component="label"
          onChange={handleFiles}
          disabled={fileLoading}
        >
          Image
          <input type="file" accept="image/*" />
        </Button>
        <Button
          startIcon={<VideoCameraBackIcon />}
          component="label"
          onChange={handleFiles}
        >
          Video
          <input type="file" accept="video/*" />
        </Button>
        <Button
          startIcon={<AudioFileIcon />}
        >
          Music
        </Button>
        <Button
          startIcon={<AttachFileIcon />}
        >
          Attachment
        </Button>
        <Button
          endIcon={loading?.createPost ? <Loading size={20} /> : <SendIcon />}
          className="create-post"
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