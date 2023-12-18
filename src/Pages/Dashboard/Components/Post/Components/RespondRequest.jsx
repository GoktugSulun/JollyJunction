import React from 'react';
import { Button } from '../../../../../Core/Components/Buttons/Button.style';
import { useDispatch, useSelector } from 'react-redux';
import * as S from '../../../Style/Dashboard.style';
import PropTypes from 'prop-types';
import { DashboardSagaActions } from '../../../Store/Dashboard.saga';
import useHttpResponse from '../../../../../Core/Hooks/useHttpResponse';
import { AppConfigSagaActions } from '../../../../../Core/Store/AppConfig.saga';

const RespondRequest = ({ sender_id }) => {
  const dispatch = useDispatch();
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);

  const acceptHandler = () => {
    const payload = {
      sender_id
    };
    dispatch(DashboardSagaActions.acceptFriendship(payload));
  };

  const rejectHandler = () => {
    const payload = {
      sender_id
    };
    dispatch(DashboardSagaActions.rejectFriendship(payload));
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      dispatch(AppConfigSagaActions.getUnseenNotifications({ query: `?is_removed=false&seen=false&receiver_id=${authorizedUser.id}`}));
    }
  }, DashboardSagaActions.rejectFriendship());

  return (
    <S.RespondRequest>
      <p className="text"> You&apos;ve got friendship request </p>
      <div className="buttons">
        <Button
          onClick={acceptHandler}
          fontSize="14px"
          padding="8px 15px"
        >
         Accept
        </Button>
        <Button
          onClick={rejectHandler}
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