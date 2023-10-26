import React, { useState } from 'react';
import * as S from '../../Style/Dashboard.style';
import UserURL from '../../../../assets/Pngs/goktug.jpeg';
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
import { UserImages } from '../../../../assets/Pngs/Pngs';
import UserProfile from '../../../../Components/UserProfile/UserProfile';

const defaultValues = {
   value: '',
};

const CreatePost = () => {
   const dispatch = useDispatch();
   const [imageURL, setImageURL] = useState(null);
   const [files, setFiles] = useState([]);
   const { user: authorizedUser } = useSelector(state => state.Login);
   const { loading } = useSelector(state => state.Dashboard);
   const { registerHandler, form } = useMaterialForm({ defaultValues });

   const createPost = () => {
      if (!form.getValues('value')) {
         dispatch(snackbar('You need to write a description or select an image, audio, attachment!', { variant: NotifierTypes.ERROR }));
         return;
      }
      const payload = {
         description: form.getValues('value'),
         user: { ...authorizedUser },
         likes: [],
         comments: [],
         saves: [],
         created_at: new Date().toString(),
         files: files.map((file) => file.name)
      };
      dispatch(DashboardSagaActions.createPost(payload));
   };

   const handleFiles = (e) => {
      //* single image for now
      const files = [...e.target.files];
      setFiles(files);
      setImageURL(URL.createObjectURL(files[0]));
   };

   const getUserSrc = () => {
      return UserImages.find((src) => src.includes(authorizedUser.img)) || null;
   };

   useHttpResponse({
      success: ({ idleAction }) => {
         form.reset(defaultValues);
         setFiles([]);
         setImageURL(null);
         idleAction();
      }
   }, DashboardSagaActions.createPost());

   return (
      <S.CreatePost>
         <div className="header">
            <UserProfile src={getUserSrc()} />
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