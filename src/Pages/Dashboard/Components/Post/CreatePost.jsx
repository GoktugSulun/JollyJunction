import React, { useState } from 'react';
import * as S from '../../Style/Dashboard.style';
import TextInput from '../../../../Core/Inputs/TextInput';
import useMaterialForm from '../../../../Core/Hooks/useMaterialForm';
import { Divider } from '../../../../Components/Divider/Divider.style';
import { Button } from '../../../../Core/Components/Buttons/Button.style';
import ImageIcon from '@mui/icons-material/Image';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ClearIcon from '@mui/icons-material/Clear';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { snackbar } from '../../../../Core/Utils/Snackbar';
import { NotifierTypes } from '../../../../Core/Constants/Enums';
import { DashboardSagaActions } from '../../Store/Dashboard.saga';
import useHttpResponse from '../../../../Core/Hooks/useHttpResponse';
import Loading from '../../../../Core/Components/Loading/Loading';
import UserProfile from '../../../../Components/UserProfile/UserProfile';
import { getFileURL } from '../../../../Core/Utils/File';
import FileTypeEnums from '../Enums/FileTypeEnums';
import FileSubTypeEnums from '../Enums/FileSubTypeEnums';
import { IconButton } from '@mui/material';

const defaultValues = {
  value: '',
};

const CreatePost = () => {
  const dispatch = useDispatch();
  const [fileURL, setFileURL] = useState(null);
  const [files, setFiles] = useState([]);
  const { authorizedUser } = useSelector(state => state.AppConfig.init);
  const { loading } = useSelector(state => state.Dashboard);
  const { registerHandler, form } = useMaterialForm({ defaultValues });

  const createPost = async () => {
    if (!form.getValues('value') && !files.length) {
      dispatch(snackbar('Write something or upload an image, audio, attachment to create a post!', { variant: NotifierTypes.ERROR }));
      return;
    }

    const payload = {
      data: {
        description: form.getValues('value'),
        user_id: authorizedUser.id
      },
      files
    };
    dispatch(DashboardSagaActions.createPost(payload));
  };

  const handleFiles = (e) => {
    //* single image for now
    const files = e.target.files;
    if (files.length) {
      const file = files[0];
      const [fileType, fileSubType] = file.type.split('/');
      if (fileType === FileTypeEnums.VIDEO && fileSubType !== FileSubTypeEnums.MP4) {
        dispatch(snackbar('Invalid video format! You can only upload mp4 video.', { variant: NotifierTypes.ERROR }));
        return;
      }
      setFiles([...files]);
      const blobURL = URL.createObjectURL(file);
      setFileURL({ url: blobURL, type: file.type.split('/')[0] });
      URL.revokeObjectURL(file);
    }
  };

  const getFileElement = ({ url, type }) => {
    switch (type) {
    case FileTypeEnums.IMAGE:
      return <img loading="lazy" className="file" src={url} alt="user-post" />;
    case FileTypeEnums.VIDEO:
      return (
        <video 
          key={url} 
          id="video" 
          className="file" 
          controls
          preload="metadata"
        >
          <source src={url + '#t=0.5'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    default:
      throw Error('Undefied file type: ' + type);
    }
  };

  const clearFile = () => {
    setFileURL(null);
    setFiles([]);
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      form.reset(defaultValues);
      setFileURL(null);
      idleAction();
    }
  }, DashboardSagaActions.createPost());

  return (
    <S.CreatePost>
      <div className="header">
        <UserProfile name={authorizedUser.name} clickable={false} src={getFileURL(authorizedUser.img)} displayName={false} />
        <TextInput
          {...registerHandler('value')}
          placeholder="What's on your mind..."
          fullWidth
        />
      </div>
      <div className="file-container">
        {
          fileURL && <>
            <Divider margin="20px 0" />
            <div className="file-wrapper"> { getFileElement(fileURL) } </div>
            <IconButton disabled={loading?.createPost} className="clear-file-button" onClick={clearFile}>
              <ClearIcon />
            </IconButton>
          </>
        }
      </div>
      <Divider margin="20px 0" />
      <div className="tools">
        <div className="tools__file-buttons">
          <Button
            startIcon={<ImageIcon />}
            component="label"
            onChange={handleFiles}
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
          {/* <Button
          startIcon={<AttachFileIcon />}
        >
          Attachment
        </Button> */}
        </div>
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