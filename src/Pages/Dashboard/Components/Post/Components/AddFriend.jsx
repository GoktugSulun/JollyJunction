import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { NotificationTypes } from '../../../../../Core/Constants/Enums';
import { useDispatch } from 'react-redux';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PropTypes from 'prop-types';
import { DashboardSagaActions } from '../../../Store/Dashboard.saga';

const AddFriend = ({ id }) => {
  const dispatch = useDispatch();

  const addFriend = () => {
    const payload = {
      receiver_id: id,
      type: NotificationTypes.REQUEST_FOR_FRIENDSHIP
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