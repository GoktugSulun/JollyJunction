import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NotificationTypes } from '../../../../../Core/Constants/Enums';
import { NotificationSagaActions } from '../../../../Notifications/Store/Notifications.saga';
import RedoIcon from '@mui/icons-material/Redo';
import { IconButton, Tooltip } from '@mui/material';

const Cancel = ({ receiver_id }) => {
  const dispatch = useDispatch();

  const cancelHandler = () => {
    const payload = {
      receiver_id,
      type: NotificationTypes.REQUEST_FOR_FRIENDSHIP,
    };
    dispatch(NotificationSagaActions.cancelFriendshipRequest(payload));
  };

  return (
    <Tooltip title="Cancel friendship request">
      <IconButton onClick={cancelHandler}>
        <RedoIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Cancel;

Cancel.propTypes = {
  receiver_id: PropTypes.number.isRequired
};