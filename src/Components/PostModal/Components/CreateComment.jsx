import React from 'react';
import * as S from '../Style/PostModal.style';
import TextInput from '../../../Core/Inputs/TextInput';
import SendIcon from '@mui/icons-material/Send';
import useMaterialForm from '../../../Core/Hooks/useMaterialForm';
import { IconButton } from '@mui/material';
import { useWatch } from 'react-hook-form';

const defaultValues = {
  comment: ''
};

const CreateComment = () => {
  const { registerHandler, form } = useMaterialForm({
    defaultValues
  });

  const comment = useWatch({ control: form.control, name: 'comment' });

  const onKeyDownHandler = (e) => {
    if (e.code === 'Enter') {
      console.log('create comment');
    }
  };

  return (
    <S.CreateComment disabled={comment === ''} >
      <TextInput
        fullWidth
        placeholder="Make a comment..."
        endAdornment={<IconButton disabled={comment === ''} > <SendIcon /> </IconButton>}
        {...registerHandler('comment')}
        onKeyDown={onKeyDownHandler}
      />
    </S.CreateComment>
  );
};

export default CreateComment;