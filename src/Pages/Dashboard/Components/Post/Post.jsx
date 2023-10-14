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

const Post = () => {
   const liked = true;
   const saved = true;

   return (
    <S.Post>
      <div className="header">
         <UserProfile
            name="Hakan Dinçtürk"
            position="Backend Developer"
         />
         <Tooltip title="Add Friend" placement="top" >
            <IconButton>
               <PersonAddIcon />
            </IconButton>
         </Tooltip>
      </div>
      <p className="description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sint. </p>
      <img src={PostImageURL} alt="post-content" />
      <div className="buttons">
         <div className="buttons__group">
            <Tooltip title={liked ? 'Cancel' : 'Like'} >
               <IconButton>
                  { 
                     liked 
                        ? <FavoriteIcon /> 
                        : <FavoriteBorderIcon /> 
                  } 
               </IconButton>
            </Tooltip>
            <span className="count"> 2 </span>
            <Tooltip title="Comment" >
               <IconButton className="comment" >
                  <ChatBubbleOutlineIcon /> 
               </IconButton>
            </Tooltip>
            <span className="count"> 5 </span>
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