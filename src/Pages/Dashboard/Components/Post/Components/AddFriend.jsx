import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { NotificationTypes } from '../../../../../Core/Constants/Enums';
import { useDispatch, useSelector } from 'react-redux';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PropTypes from 'prop-types';
import { DashboardSagaActions } from '../../../Store/Dashboard.saga';

const AddFriend = ({ id }) => {
  const dispatch = useDispatch();
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);

  const addFriend = () => {
    const payload = {
      data: {
        receiver_id: id,
        type: NotificationTypes.REQUEST_FOR_FRIENDSHIP
      },
      sender_id: authorizedUser.id
    };
    dispatch(DashboardSagaActions.addFriend(payload));
  };

  return (
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
  );
};

export default AddFriend;

AddFriend.propTypes = {
  id: PropTypes.number.isRequired
};