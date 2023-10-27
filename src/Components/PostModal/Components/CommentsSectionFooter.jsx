import React from 'react';
import * as S from '../Style/PostModal.style';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import moment from 'moment';
import TextInput from '../../../Core/Inputs/TextInput';
import { Divider } from '../../Divider/Divider.style';
import { NotificationTypes } from '../../../Core/Constants/Enums';
import { DashboardSagaActions } from '../../../Pages/Dashboard/Store/Dashboard.saga';

const CommentsSectionFooter = () => {
  const dispatch = useDispatch();
  const { postData } = useSelector((state) => state.PostModal);
  const { user: authorizedUser } = useSelector((state) => state.Login);

  const getDate = () => {
    const diff = moment.duration(moment().diff(postData?.created_at)).humanize();
    return `${diff} ago`;
  };

  const focusCommentInput = () => {
    const input = document.getElementById('create-comment-input');
    input.focus();
  };

  const isItLiked = () => {
    return !!postData.likes.find((user_id) => user_id === authorizedUser?.id);
  };

  const likeHandler = () => {
    const updatedData = {
      ...postData,
      likes: isItLiked() 
        ? postData.likes.filter((user_id) => user_id !== authorizedUser.id)
        : [...postData.likes, authorizedUser.id]
    };
    const notificationData = {
      sender_user: { ...authorizedUser },
      receiver_user: { ...postData.user },
      type: NotificationTypes.LIKED_POST,
      created_at: new Date().toString(),
      read: false,
      is_removed: false,
    };
    const payload = {
      post_id: postData.id,
      data: updatedData,
      ...(authorizedUser.id === postData.user.id ? {} : {notificationData}),
      liked: !isItLiked()
    };
    dispatch(DashboardSagaActions.likePost(payload));
  };

  const isItSaved = () => {
    return !!postData.saves.find((user_id) => user_id === authorizedUser?.id);
  };

  const saveHandler = () => {
    const updatedData = {
      ...postData,
      saves: isItSaved() 
        ? postData.saves.filter((user_id) => user_id !== authorizedUser.id)
        : [...postData.saves, authorizedUser.id]
    };
    const payload = {
      post_id: postData.id,
      data: updatedData,
      saved: !isItSaved()
    };
    dispatch(DashboardSagaActions.savePost(payload));
  };

  return (
    <S.CommentsSectionFooter>
      <div className="tools">
        <div className="tools__like-comment">
          <Tooltip title={isItLiked() ? 'Unlike' : 'Like'} placement="top">
            <IconButton onClick={likeHandler} >
              { 
                isItLiked() 
                  ? <FavoriteIcon /> 
                  : <FavoriteBorderIcon /> 
              } 
            </IconButton>
          </Tooltip>
          <Tooltip title="Comment" placement="top">
            <IconButton onClick={focusCommentInput}>
              <ChatBubbleOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Tooltip title={isItSaved() ? 'Unsave' : 'Save'} placement="top">
          <IconButton onClick={saveHandler}>
            { 
              isItSaved() 
                ? <BookmarkIcon /> 
                : <BookmarkBorderIcon /> 
            } 
          </IconButton>
        </Tooltip>
      </div>
      <div className="post-detail">
        <Button className="post-detail__likes">
          {postData?.likes?.length || 0} likes
        </Button>
        <span className="post-detail__date"> {getDate()} </span>
      </div>
    </S.CommentsSectionFooter>
  );
};

export default CommentsSectionFooter;