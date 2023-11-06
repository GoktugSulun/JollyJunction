import React, { useEffect, useState } from 'react';
import * as S from './Style/Notifications.style';
import NotificationsContent from './Components/NotificationsContent';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Core/Components/Loading/Loading';
import { NotificationSagaActions } from './Store/Notifications.saga';

const Notifications = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.Notifications);
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);

  useEffect(() => {
    const payload = {
      queries: `?receiver_id=${authorizedUser.id}&is_removed=false`
    };
    dispatch(NotificationSagaActions.getNotifications(payload));
  }, []);

  return (
    <S.Notifications>
      { loading?.getNotifications && <Loading /> }
      <NotificationsContent  />
    </S.Notifications>
  );
};

export default Notifications;