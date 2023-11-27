import React, { useEffect } from 'react';
import * as S from './Style/Notifications.style';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Core/Components/Loading/Loading';
import { NotificationSagaActions } from './Store/Notifications.saga';
import Content from './Components/Content';
import Settings from './Components/Settings';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import { Button } from '../../Core/Components/Buttons/Button.style';
import { NotificationActions } from './Store/Notifications.slice';
import { DashboardSagaActions } from '../Dashboard/Store/Dashboard.saga';

const Notifications = () => {
  const dispatch = useDispatch();
  const { loading, notifications, page, limit, more } = useSelector((state) => state.Notifications);
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);

  const fetchNotifications = () => {
    const payload = {
      queries: `?page=${page}&limit=${limit}&receiver_id=${authorizedUser.id}&is_removed=${false}`
    };
    dispatch(NotificationSagaActions.getNotifications(payload));
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      const unseenNotificationIds = notifications
        .filter((obj) => !obj.seen)
        .map((obj) => obj.id);
      if (!unseenNotificationIds.length) {
        return;
      }
      const payload = {
        notification_ids: unseenNotificationIds
      };
      dispatch(NotificationSagaActions.markNotificationsSeen(payload));
    }
  }, NotificationSagaActions.getNotifications());

  useEffect(() => {
    fetchNotifications();
    const payload = { query: `?user_id=${authorizedUser.id}` };
    dispatch(DashboardSagaActions.getFriends(payload));
    return () => {
      dispatch(NotificationActions.setReset());
    };
  }, []);

  return (
    <S.NotificationsContent>
      { loading?.getNotifications && <Loading /> }
      {
        notifications.map((obj) => (
          <S.NotificationItem key={obj.id}>
            <Content data={obj} />
            <Settings data={obj} />
          </S.NotificationItem>
        ))
      }
      { loading?.getNotifications === false && more && <Button style={{ marginTop: 20}} onClick={fetchNotifications}> Fetch More </Button> }
    </S.NotificationsContent>
  );
};

export default Notifications;