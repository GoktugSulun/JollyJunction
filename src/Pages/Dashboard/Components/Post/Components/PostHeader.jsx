import React from 'react';
import UserProfile from '../../../../../Components/UserProfile/UserProfile';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { NotificationTypes } from '../../../../../Core/Constants/Enums';
import { DashboardSagaActions } from '../../../Store/Dashboard.saga';
import Loading from '../../../../../Core/Components/Loading/Loading';
import { getUserImageURL } from '../../../../../assets/Pngs/Pngs';

const PostHeader = ({ data }) => {
  const dispatch = useDispatch();
  const { user: authorizedUser } = useSelector((state) => state.Login);
  const { notificationsICreated, loading } = useSelector((state) => state.Dashboard);

  const isPersonMyFriend = () => {
    //* Authorized user and post creator same person
    if (authorizedUser.id === data.user_id) {
      return true;
    }
    return !!authorizedUser?.friends?.find((obj) => obj.id === data?.user?.id);
  };

  const friendCanBeAdded = () => {
    if (isPersonMyFriend()) {
      return false;
    }
    const didISendRequestForFriendship = !!notificationsICreated.find((obj) => obj?.receiver_user?.id === data?.user?.id && obj.type === NotificationTypes.REQUEST_FOR_FRIENDSHIP);
    return didISendRequestForFriendship ? false : true;
  };

  const addFriend = () => {
    const payload = {
      sender_user: { ...authorizedUser },
      receiver_user: { ...data.user },
      type: NotificationTypes.REQUEST_FOR_FRIENDSHIP,
      created_at: new Date().toString(),
      read: false,
      is_removed: false
    };
    dispatch(DashboardSagaActions.addFriend(payload));
  };

  return (
    <div className="header">
      <UserProfile
        name={`${data?.user?.name || ''} ${data?.user?.surname || ''}`}
        position={data?.user?.position || ''}
        src={getUserImageURL(data?.user?.img)}
      />
      {
        loading?.addFriend || loading?.getNotificationsICreated
          ? <div> <Loading color="#FFF" size={25} /> </div>
          : friendCanBeAdded() &&
          (
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