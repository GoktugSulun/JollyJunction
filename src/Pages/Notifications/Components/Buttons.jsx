import React from 'react';
import * as S from '../Style/Notifications.style';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import { useSelector } from 'react-redux';
import Loading from '../../../Core/Components/Loading/Loading';
import PropTypes from 'prop-types';

const Buttons = ({ data }) => {
  const { loading } = useSelector((state) => state.Notifications);

  const acceptHandler = () => {
    console.log('accept');
  };

  const deleteHandler = () => {
    console.log('cancel');
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