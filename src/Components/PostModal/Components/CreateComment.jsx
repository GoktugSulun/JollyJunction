import React from 'react';
import * as S from '../Style/PostModal.style';
import TextInput from '../../../Core/Inputs/TextInput';
import SendIcon from '@mui/icons-material/Send';
import useMaterialForm from '../../../Core/Hooks/useMaterialForm';
import { IconButton } from '@mui/material';
import { useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { PostModalSagaActions } from '../Store/PostModal.saga';

const defaultValues = {
  comment: ''
};

const CreateComment = () => {
  const dispatch = useDispatch();
  const { postData } = useSelector((state) => state.PostModal);
  const { registerHandler, form } = useMaterialForm({
    defaultValues
  });

  const comment = useWatch({ control: form.control, name: 'comment' });

  const createCommentHandler = () => {
    const payload = {
      comment: form.getValues('comment'),
      created_at: new Date().toString(),
      user: form.user,
      post_id: postData.id,
      is_removed: false
    };
    dispatch(PostModalSagaActions.createComment(payload));
  };

  const onKeyDownHandler = (e) => {
    if (e.code === 'Enter') {
      createCommentHandler();
    }
  };

  return (
    <S.CreateComment disabled={comment === ''} >
      <TextInput
        fullWidth
        placeholder="Make a comment..."
        endAdornment={<IconButton onClick={createCommentHandler} disabled={comment === ''} > <SendIcon /> </IconButton>}
        {...registerHandler('comment')}
        onKeyDown={onKeyDownHandler}
      />
    </S.CreateComment>
  );
};

export default CreateComment;