import React from 'react';
import { Button } from '../../../../../Core/Components/Buttons/Button.style';
import { useDispatch } from 'react-redux';
import * as S from '../../../Style/Dashboard.style';
import PropTypes from 'prop-types';
import { DashboardSagaActions } from '../../../Store/Dashboard.saga';

const RespondRequest = ({ sender_id }) => {
  const dispatch = useDispatch();

  const accept = () => {
    const payload = {
      sender_id
    };
    dispatch(DashboardSagaActions.acceptFriendship(payload));
  };

  const reject = () => {
    console.log('reject');
  };

  return (
    <S.RespondRequest>
      <p className="text"> You&apos;ve got friendship request </p>
      <div className="buttons">
        <Button
          onClick={accept}
          fontSize="14px"
          padding="8px 15px"
        >
         Accept
        </Button>
        <Button
          onClick={reject}
          fontSize="14px"
          bgColor="#2d2d2d"
          padding="8px 15px"
        >
         Reject
        </Button>
      </div>
    </S.RespondRequest>
  );
};

export default RespondRequest;

RespondRequest.propTypes = {
  sender_id: PropTypes.number.isRequired
};