import React from 'react';
import * as S from '../../Style/Dashboard.style';
import UserProfile from '../../../../Components/UserProfile/UserProfile';
import { IconButton, Tooltip } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSagaActions } from '../../Store/Dashboard.saga';
import { PostImages, UserImages } from '../../../../assets/Pngs/Pngs';

const Post = ({ data }) => {
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

   const getImageURL = () => {
      return PostImages.find((path) => path.includes(data.files[0]));
   };

   const isPersonMyFriend = () => {
      //* Authorized user and post creator same person
      if (authorizedUser.id === data.user.id) {
         return true;
      }
      return !!authorizedUser?.friends?.find((user_id) => user_id === data.user.id);
   };

   const getUserSrc = () => {
      return UserImages.find((src) => src.includes(data.user.img)) || null;
   };
   
   return (
    <S.Post>
      <div className="header">
         <UserProfile
            name={`${data?.user?.name || ''} ${data?.user?.surname || ''}`}
            position={data?.user?.position || ''}
            src={getUserSrc()}
         />
         {
            !isPersonMyFriend()
               && (
                  <Tooltip 
                     title="Add Friend" 
                     placement="top" 
                  >
                     <IconButton> 
                        <PersonAddIcon />
                     </IconButton>
                  </Tooltip>
               )
         }
      </div>
      <p className="description"> { data.description } </p>
      { !!data.files.length && <img loading="lazy" src={getImageURL()} alt="post-content" /> }
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
    </S.Post>
  );
};

export default Post;

Post.propTypes = {
   data: PropTypes.object.isRequired
};