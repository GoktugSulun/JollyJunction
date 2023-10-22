import React from 'react';
import UserProfile from '../../../../../Components/UserProfile/UserProfile';
import { UserImages } from '../../../../../assets/Pngs/Pngs';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const PostHeader = ({ data }) => {
   const { user: authorizedUser } = useSelector((state) => state.Login);

   const getUserSrc = () => {
      return UserImages.find((src) => src.includes(data.user.img)) || null;
   };

   const isPersonMyFriend = () => {
      //* Authorized user and post creator same person
      if (authorizedUser.id === data.user.id) {
         return true;
      }
      return !!authorizedUser?.friends?.find((user_id) => user_id === data.user.id);
   };

  return (
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
  );
};

export default PostHeader;

PostHeader.propTypes = {
   data: PropTypes.object.isRequired
};