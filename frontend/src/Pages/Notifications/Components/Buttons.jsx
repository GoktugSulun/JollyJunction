import React from 'react';
import * as S from '../Style/Notifications.style';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../Core/Components/Loading/Loading';
import PropTypes from 'prop-types';
import { NotificationSagaActions } from '../Store/Notifications.saga';
import FriendshipTypes from '../../../Constants/FriendshipTypes';

const Buttons = ({ data }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.Notifications);

  const acceptHandler = () => {
    const payload = {
      notification_id: data.id,
      type: FriendshipTypes.ACCEPT
    };
    dispatch(NotificationSagaActions.friendship(payload));
  };

  const deleteHandler = () => {
    const payload = {
      notification_id: data.id,
      type: FriendshipTypes.REJECT
    };
    dispatch(NotificationSagaActions.friendship(payload));
  };

  return (
    <S.Buttons>
      <Button 
        disabled={loading?.rejectFriendshipRequest || loading?.acceptFriendshipRequest}
        onClick={() => acceptHandler()}
      >
        { loading?.acceptFriendshipRequest ? <Loading size={25} color="#FFFFFF" /> : 'Accept' }
      </Button>
      <Button
        bgColor="#484747"
        disabled={loading?.rejectFriendshipRequest || loading?.acceptFriendshipRequest}
        onClick={() => deleteHandler()}
      >
        { loading?.rejectFriendshipRequest ? <Loading size={25} color="#FFFFFF" /> : 'Delete' }
      </Button>
    </S.Buttons>
  );
};

export default Buttons;

Buttons.propTypes = {
  data: PropTypes.object.isRequired
};