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
import { DashboardActions } from '../../../Pages/Dashboard/Store/Dashboard.slice';
import Loading from '../../../Core/Components/Loading/Loading';

const defaultValues = {
  comment: ''
};

const CreateComment = () => {
  const dispatch = useDispatch();
  const { postData, loading } = useSelector((state) => state.PostModal);
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
      dispatch(DashboardActions.setCommentCount({ post_id: postData.id, comments_count: postData.comments_count }));
      form.reset(defaultValues);
    }
  }, PostModalSagaActions.createComment());

  return (
    <S.CreateComment disabled={comment === ''} >
      <TextInput
        fullWidth
        id="create-comment-input"
        placeholder="Make a comment..."
        readOnly={loading?.createComment}
        endAdornment={
          loading?.createComment
            ? <Loading size={25} color="#FFFFFF" />
            : <IconButton onClick={createCommentHandler} disabled={comment === ''} > <SendIcon /> </IconButton>}
        {...registerHandler('comment')}
        onKeyDown={onKeyDownHandler}
      />
    </S.CreateComment>
  );
};

export default CreateComment;