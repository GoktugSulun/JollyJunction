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
  const { loading } = useSelector((state) => state.Dashboard);

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
        loading?.addFriend
          ? <div> <Loading color="#FFF" size={25} /> </div>
          : data.canBeFriend &&
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