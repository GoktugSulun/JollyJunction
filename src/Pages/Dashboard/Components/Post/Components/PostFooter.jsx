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

const PostFooter = ({ data }) => {
   const dispatch = useDispatch();
   const { user: authorizedUser } = useSelector((state) => state.Login);

   const isItLiked = () => {
      return !!data.likes.find((user_id) => user_id === authorizedUser?.id);
   };

   const likeHandler = () => {
      const updatedData = {
         ...data,
         likes: isItLiked() 
            ? data.likes.filter((user_id) => user_id !== authorizedUser.id)
            : [...data.likes, authorizedUser.id]
      };
      const payload = {
         post_id: data.id,
         data: updatedData,
         liked: !isItLiked()
      };
      dispatch(DashboardSagaActions.likePost(payload));
   };

   const isItSaved = () => {
      return !!data.saves.find((user_id) => user_id === authorizedUser?.id);
   };

   const saveHandler = () => {
      const updatedData = {
         ...data,
         saves: isItSaved() 
            ? data.saves.filter((user_id) => user_id !== authorizedUser.id)
            : [...data.saves, authorizedUser.id]
      };
      const payload = {
         post_id: data.id,
         data: updatedData,
         saved: !isItSaved()
      };
      dispatch(DashboardSagaActions.savePost(payload));
   };

  return (
   <div className="buttons">
      <div className="buttons__group">
         <Tooltip title={isItLiked() ? 'Unlike' : 'Like'} >
            <IconButton onClick={likeHandler} >
               { 
                  isItLiked() 
                     ? <FavoriteIcon /> 
                     : <FavoriteBorderIcon /> 
               } 
            </IconButton>
         </Tooltip>
         <span className="count"> { data.likes.length } </span>
         <Tooltip title="Comment" >
            <IconButton className="comment" >
               <ChatBubbleOutlineIcon /> 
            </IconButton>
         </Tooltip>
         <span className="count"> { data.comments.length } </span>
      </div>
      <Tooltip title={isItSaved() ? 'Unsave' : 'Save'} >
         <IconButton onClick={saveHandler}>
            { 
               isItSaved() 
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
   data: PropTypes.object.isRequired
};