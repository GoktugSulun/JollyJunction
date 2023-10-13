import React from 'react';
import * as S from '../Style/Dashboard.style';
import UserProfile from '../../../Components/UserProfile/UserProfile';
import { IconButton, Tooltip } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const FriendList = () => {

   const removeFriend = () => {

   };

   return (
      <S.FriendList>
         <div className="title"> Friend List </div>
         <div className="friend">
            <UserProfile 
               name="Damla Nur Yilmaz" 
               position="Frontend Developer" 
               fontSize="25px"
               small
            />
            <Tooltip title="Remove Friend" placement="top" >
               <IconButton onClick={removeFriend}>
                  <PersonRemoveIcon />
               </IconButton>
            </Tooltip>
         </div>
         <div className="friend">
            <UserProfile 
               name="Oznur Sulun" 
               position="Math Teacher" 
               fontSize="25px"
            />
            <Tooltip title="Remove Friend" placement="top" >
               <IconButton onClick={removeFriend}>
                  <PersonRemoveIcon />
               </IconButton>
            </Tooltip>
         </div>
      </S.FriendList>
   );
};

export default FriendList;