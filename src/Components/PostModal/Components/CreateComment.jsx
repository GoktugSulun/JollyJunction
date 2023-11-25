import React from 'react';
import * as S from '../Style/PostModal.style';
import TextInput from '../../../Core/Inputs/TextInput';
import SendIcon from '@mui/icons-material/Send';
import useMaterialForm from '../../../Core/Hooks/useMaterialForm';
import { IconButton } from '@mui/material';
import { useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { PostModalSagaActions } from '../Store/PostModal.saga';
import useHttpResponse from '../../../Core/Hooks/useHttpResponse';
import { NotificationTypes } from '../../../Core/Constants/Enums';
import { useLocation } from 'react-router-dom';

const defaultValues = {
  comment: ''
};

const CreateComment = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { postData } = useSelector((state) => state.PostModal);
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);
  const { registerHandler, form } = useMaterialForm({
    defaultValues
  });

  const comment = useWatch({ control: form.control, name: 'comment' });

  const createCommentHandler = () => {
    const payload = {
      comment: form.getValues('comment'),
      post_id: postData.id
    };
    dispatch(PostModalSagaActions.createComment(payload));
  };

  const onKeyDownHandler = (e) => {
    if (e.code === 'Enter') {
      createCommentHandler();
    }
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      form.reset(defaultValues);
    }
  }, PostModalSagaActions.createComment());

  return (
    <S.CreateComment disabled={comment === ''} >
      <TextInput
        fullWidth
        id="create-comment-input"
        placeholder="Make a comment..."
        endAdornment={<IconButton onClick={createCommentHandler} disabled={comment === ''} > <SendIcon /> </IconButton>}
        {...registerHandler('comment')}
        onKeyDown={onKeyDownHandler}
      />
    </S.CreateComment>
  );
};

export default CreateComment;