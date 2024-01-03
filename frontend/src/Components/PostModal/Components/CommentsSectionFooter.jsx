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
import { DashboardSagaActions } from '../../../Pages/Dashboard/Store/Dashboard.saga';

const CommentsSectionFooter = () => {
  const dispatch = useDispatch();
  const { postData } = useSelector((state) => state.PostModal);

  const getDate = () => {
    const diff = moment.duration(moment().diff(postData?.created_at)).humanize();
    return `${diff} ago`;
  };

  const focusCommentInput = () => {
    const input = document.getElementById('create-comment-input');
    input.focus();
  };

  const likeHandler = () => {
    const payload = {
      like: !postData.liked,
      post_id: postData.id,
      inPostModal: true
    };
    dispatch(DashboardSagaActions.likePost(payload));
  };
  
  const saveHandler = () => {
    const payload = {
      save: !postData.saved,
      post_id: postData.id,
      inPostModal: true
    };
    dispatch(DashboardSagaActions.savePost(payload));
  };

  return (
    <S.CommentsSectionFooter>
      <div className="tools">
        <div className="tools__like-comment">
          <Tooltip title={postData.liked ? 'Unlike' : 'Like'} placement="top">
            <IconButton onClick={likeHandler}>
              { postData.liked ? <FavoriteIcon /> : <FavoriteBorderIcon /> } 
            </IconButton>
          </Tooltip>
          <Tooltip title="Comment" placement="top">
            <IconButton onClick={focusCommentInput}>
              <ChatBubbleOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Tooltip title={postData.saved ? 'Unsave' : 'Save'} placement="top">
          <IconButton onClick={saveHandler}>
            { postData.saved ? <BookmarkIcon /> : <BookmarkBorderIcon /> } 
          </IconButton>
        </Tooltip>
      </div>
      <div className="post-detail">
        <Button disableRipple className="post-detail__likes">
          {postData?.likes_count || 0} likes
        </Button>
        <span className="post-detail__date"> {getDate()} </span>
      </div>
    </S.CommentsSectionFooter>
  );
};

export default CommentsSectionFooter;