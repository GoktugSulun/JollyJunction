import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSagaActions } from '../../../Store/Dashboard.saga';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { PostModalActions } from '../../../../../Components/PostModal/Store/PostModal.slice';
import { ModalTypes } from '../../../../../Core/Constants/Enums';

const PostFooter = ({ data, likeHandler }) => {
  const dispatch = useDispatch();
  const { user: authorizedUser } = useSelector((state) => state.Login);

  const saveHandler = () => {
    const updatedData = {
      ...data,
      saves: data.saved 
        ? data?.saves?.filter((user_id) => user_id !== authorizedUser.id)
        : [...data.saves, authorizedUser.id]
    };
    const payload = {
      post_id: data.id,
      data: updatedData,
      saved: !data.saved
    };
    dispatch(DashboardSagaActions.savePost(payload));
  };

  const openPostModal = () => {
    dispatch(PostModalActions.setPostData(data));
    dispatch(PostModalActions.handleModal(ModalTypes.OPEN));
  };

  return (
    <div className="buttons">
      <div className="buttons__group">
        <Tooltip title={data.liked ? 'Unlike' : 'Like'} >
          <IconButton onClick={likeHandler} >
            { 
              data.liked 
                ? <FavoriteIcon /> 
                : <FavoriteBorderIcon /> 
            } 
          </IconButton>
        </Tooltip>
        <span className="count"> { data.likes_count } </span>
        <Tooltip title="Comment" >
          <IconButton onClick={openPostModal} className="comment" >
            <ChatBubbleOutlineIcon /> 
          </IconButton>
        </Tooltip>
        <span className="count"> { data.comments_count} </span>
      </div>
      <Tooltip title={data.saved ? 'Unsave' : 'Save'} >
        <IconButton onClick={saveHandler}>
          { 
            data.saved
              ? <BookmarkIcon /> 
              : <BookmarkBorderIcon /> 
          } 
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default PostFooter;

PostFooter.propTypes = {
  data: PropTypes.object.isRequired,
  likeHandler: PropTypes.func.isRequired,
};