import React, { useState } from 'react';
import * as S from '../Style/PostModal.style';
import { getUserImageURL } from '../../../assets/Pngs/Pngs';
import moment from 'moment';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import { IconButton, Tooltip } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useMaterialForm from '../../../Core/Hooks/useMaterialForm';
import PropTypes from 'prop-types';
import CommentsSettings from './CommentsSettings';
import { useDispatch, useSelector } from 'react-redux';
import { PostModalSagaActions } from '../Store/PostModal.saga';
import TextInput from '../../../Core/Inputs/TextInput';
import { useWatch } from 'react-hook-form';
import Loading from '../../../Core/Components/Loading/Loading';
import CommentActionTypes from '../Enums/CommentActionTypes';
import { PostModalActions } from '../Store/PostModal.slice';
import { ModalTypes } from '../../../Core/Constants/Enums';
import { DashboardActions } from '../../../Pages/Dashboard/Store/Dashboard.slice';

const defaultValues = {
  comment: ''
};

const Comment = ({ data, commentLoadingStates }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [commentLoadingState, setCommentLoadingState] = commentLoadingStates;
  const [commentToBeEdited, setCommentToBeEdited] = useState({
    isEditing: false,
    data: {}
  });
  const  { authorizedUser } = useSelector((state) => state.AppConfig.init);
  const { form, registerHandler } = useMaterialForm({ defaultValues });
  const comment = useWatch({ control: form.control, name: 'comment' });

  const isLiked = (likes) => {
    return !!likes.find((user_id) => user_id === authorizedUser.id);
  };

  const likeCommentHandler = (id, likes) => {
    const payload = { id, like: !isLiked(likes) };
    dispatch(PostModalSagaActions.likeComment(payload));
  };

  const getDate = (created_at) => {
    const diff = moment.duration(moment().diff(created_at)).humanize();
    return `${diff} ago`;
  };

  const resetHandler = () => {
    form.reset(defaultValues);
    setCommentToBeEdited({
      isEditing: false,
      data: {}
    });
    setCommentLoadingState((prevValues) => prevValues.filter((obj) => obj.id !== data.id));
  };

  const editHandler = () => {
    setCommentLoadingState((prevValues) => [...prevValues, { id: data.id, type: CommentActionTypes.EDIT }]);
    const payload = {
      data: {
        id: data.id,
        comment: form.getValues('comment'),
      },
      resetHandler
    };
    dispatch(PostModalSagaActions.editComment(payload));
  };

  const startEditingHandler = () => {
    form.setValue('comment', data.comment);
    setCommentToBeEdited({
      isEditing: true,
      data
    });
  };

  const navigateHandler = () => {
    const targetUrl = `profile/${data.user.name.split(' ').join('')}${data.user.surname}/${data.user.id}`;
    if (location.pathname !== targetUrl) {
      dispatch(PostModalActions.handleModal(ModalTypes.CLOSE));
      dispatch(DashboardActions.setReset());
      navigate(targetUrl);
    }
  };

  return (
    <S.CommentContainer className="comment">
      <Button
        bgColor="transparent"
        padding="0"
        disableRipple
        minWidth="0"
        onClick={navigateHandler}
      >
        <img src={getUserImageURL(data?.user?.img)} alt="user-commented" />
      </Button>
      <div className="comment-wrapper">
        <S.Comment>
          <div className="header">
            <div className="user">
              <div className="user__name" onClick={navigateHandler} > {data?.user?.name} {data?.user?.surname} </div> 
              <span className="user__position"> {data?.user?.position} </span>
            </div>
            <Tooltip title={isLiked(data.likes) ? 'Unlike' : 'Like'}>
              <IconButton 
                disabled={!!commentLoadingState.find((obj) => obj.id === data.id && obj.type === CommentActionTypes.LIKE)} 
                onClick={() => likeCommentHandler(data.id, data.likes)}
              >
                {
                  isLiked(data.likes)
                    ? <FavoriteIcon />
                    : <FavoriteBorderIcon />
                }
              </IconButton>
            </Tooltip>
          </div>
          {
            commentToBeEdited.isEditing
              ? <div className="edit-section">
                <TextInput fullWidth {...registerHandler('comment')} disabled={!!commentLoadingState.find((obj) => obj.id === data.id && obj.type === CommentActionTypes.EDIT)} />
                <div className="edit-section__buttons">
                  <Button
                    bgColor="#202022"
                    padding="5px 15px"
                    fontSize="14px"
                    onClick={resetHandler}
                    disabled={!!commentLoadingState.find((obj) => obj.id === data.id && obj.type === CommentActionTypes.EDIT)}
                  >
                     Cancel
                  </Button>
                  <Button
                    padding="5px 15px"
                    fontSize="14px"
                    disabled={comment.trim() === '' || comment.trim() === data.comment || (!!commentLoadingState.find((obj) => obj.id === data.id && obj.type === CommentActionTypes.EDIT))}
                    onClick={editHandler}
                  >
                    { 
                      (commentLoadingState.find((obj) => obj.id === data.id && obj.type === CommentActionTypes.EDIT)) 
                        ? <Loading color="#FFFFFF" size={24} /> 
                        : 'Edit' 
                    }
                  </Button>
                </div>
              </div>
              : <p className="text"> {data?.comment} </p>
          }
          <div className="footer">
            <span className="date"> {getDate(data?.created_at)} </span> 
            <Button
              disableRipple
              bgColor="trasparent"
              minWidth="inital"
              padding="0"
              className="likes"
            >
              {data.likes.length} likes
            </Button>
            { authorizedUser.id === data.user_id 
               && <CommentsSettings 
                 startEditingHandler={startEditingHandler}  
                 commentLoadingStates={commentLoadingStates} 
                 commentId={data.id}
                 isEditing={commentToBeEdited.isEditing}
               /> 
            }
          </div>
        </S.Comment>
      </div>
    </S.CommentContainer>
  );
};

export default Comment;

Comment.propTypes = {
  data: PropTypes.object.isRequired,
  commentLoadingStates: PropTypes.array.isRequired
};