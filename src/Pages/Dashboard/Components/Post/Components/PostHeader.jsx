import React from 'react';
import UserProfile from '../../../../../Components/UserProfile/UserProfile';
import { UserImages } from '../../../../../assets/Pngs/Pngs';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { NotificationTypes } from '../../../../../Core/Constants/Enums';
import { DashboardSagaActions } from '../../../Store/Dashboard.saga';

const PostHeader = ({ data }) => {
   const dispatch = useDispatch();
   const { user: authorizedUser } = useSelector((state) => state.Login);
   const { notificationsICreated } = useSelector((state) => state.Dashboard);

   const getUserSrc = () => {
      return UserImages.find((src) => src.includes(data.user.img)) || null;
   };

   const isPersonMyFriend = () => {
      //* Authorized user and post creator same person
      if (authorizedUser.id === data.user.id) {
         return true;
      }
      return !!authorizedUser.friends.find((obj) => obj.id === data.user.id);
   };

   const friendCanBeAdded = () => {
      if (isPersonMyFriend()) {
         return false;
      }
      const didISendRequestForFriendship = !!notificationsICreated.find((obj) => obj.receiver_user.id === data.user.id);
      return didISendRequestForFriendship ? false : true;
   };

   const addFriend = () => {
      const payload = {
         sender_user: { ...authorizedUser },
         receiver_user: { ...data.user },
         type: NotificationTypes.REQUEST_FOR_FRIENDSHIP,
         date: new Date().toString()
      };
      dispatch(DashboardSagaActions.addFriend(payload));
   };

  return (
   <div className="header">
      <UserProfile
         name={`${data?.user?.name || ''} ${data?.user?.surname || ''}`}
         position={data?.user?.position || ''}
         src={getUserSrc()}
      />
      {
         friendCanBeAdded()
            && (
               <Tooltip 
                  title="Add Friend" 
                  placement="top" 
               >
                  <IconButton
                     onClick={addFriend}
                  > 
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