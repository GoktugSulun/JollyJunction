import React from 'react';
import * as S from '../../Style/Dashboard.style';
import UserProfile from '../../../../Components/UserProfile/UserProfile';
import { IconButton, Tooltip } from '@mui/material';
import PostImageURL from '../../../../assets/Pngs/img-1.jpg';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Post = ({ data }) => {
   const liked = true;
   const saved = true;
   const { user } = useSelector((state) => state.Login);

   const isItLiked = () => {
      return !!data.likes.find((obj) => obj.id === user?.id);
   };

   return (
    <S.Post>
      <div className="header">
         <UserProfile
            name={`${data?.user?.name || ''} ${data?.user?.surname || ''}`}
            position={data?.user?.position || ''}
         />
         <Tooltip title="Add Friend" placement="top" >
            <IconButton>
               <PersonAddIcon />
            </IconButton>
         </Tooltip>
      </div>
      <p className="description"> { data.description } </p>
      { data.img && <img src={PostImageURL} alt="post-content" /> }
      <div className="buttons">
         <div className="buttons__group">
            <Tooltip title={isItLiked() ? 'Cancel' : 'Like'} >
               <IconButton>
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
         <Tooltip title={saved ? 'Save' : 'Cancel'} >
            <IconButton>
               { 
                  saved 
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