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
  const { user: authorizedUser } = useSelector((state) => state.Login);
  const { registerHandler, form } = useMaterialForm({
    defaultValues
  });

  const comment = useWatch({ control: form.control, name: 'comment' });

  const createCommentHandler = () => {
    const payload = {
      data: {
        comment: form.getValues('comment'),
        created_at: new Date().toString(),
        user: authorizedUser,
        post_id: postData.id,
        is_removed: false
      },
      currentComments: postData.comments,
      notificationData: authorizedUser.id === postData.user.id 
        ? null
        : {
          sender_user: { ...authorizedUser },
          receiver_user: { ...postData.user },
          type: NotificationTypes.COMMENTED_POST,
          created_at: new Date().toString(),
          read: false,
          is_removed: false,
        },
      pathname: location.pathname
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