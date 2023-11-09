import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../../Core/Components/Buttons/Button.style';
import PropTypes from 'prop-types';
import { NotificationTypes } from '../../../../../Core/Constants/Enums';
import { NotificationSagaActions } from '../../../../Notifications/Store/Notifications.saga';

const Cancel = ({ receiver_id }) => {
  const dispatch = useDispatch();

  const cancel = () => {
    const payload = {
      receiver_id,
      type: NotificationTypes.REQUEST_FOR_FRIENDSHIP,
    };
    dispatch(NotificationSagaActions.cancelFriendshipRequest(payload));
  };

  return (
    <Button
      onClick={cancel}
      fontSize="14px"
      bgColor="#2d2d2d"
    >
      Cancel friendship request
    </Button>
  );
};

export default Cancel;

Cancel.propTypes = {
  receiver_id: PropTypes.number.isRequired
};