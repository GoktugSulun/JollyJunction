import React from 'react';
import * as S from '../../Style/Dashboard.style';
import UserURL from '../../../../assets/Pngs/foto.jpeg';
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

const defaultValues = {
   value: '',
};

const CreatePost = () => {
   const dispatch = useDispatch();
   const { user } = useSelector(state => state.Login);
   const { registerHandler, form } = useMaterialForm({ defaultValues });

   const createPost = () => {
      if (!form.getValues('value')) {
         dispatch(snackbar('You need to write a description or select an image, audio, attachment!', { variant: NotifierTypes.ERROR }));
      }
      const payload = {
         description: form.getValues('value'),
         user: {
            id: user.id,
            name: user.name,
            surname: user.surname,
            position: user.position
         },
         likes: [],
         comments: [],
         date: new Date()
      };
      dispatch(DashboardSagaActions.createPost(payload));
   };

   return (
      <S.CreatePost>
         <div className="header">
            <img src={UserURL} alt="user" />
            <TextInput
               {...registerHandler('value')}
               placeholder="What's on your mind..."
               fullWidth
            />
         </div>
         <Divider margin="20px 0" />
         <div className="tools">
            <Button
               startIcon={<ImageIcon />}
               bgColor="transparent"
               hoverBgColor="#333"
               hoverColor="#FFFFFF"
               $color="#7a7a7a"
               borderRadius="30px"
            >
               Image
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
               endIcon={<SendIcon />}
               bgColor="#333"
               hoverBgColor="#555"
               $color="#927CD9"
               borderRadius="30px"
               onClick={createPost}
            >
               POST
            </Button>
         </div>
      </S.CreatePost>
  );
};

export default CreatePost;