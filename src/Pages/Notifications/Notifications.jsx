import React, { useEffect } from 'react';
import * as S from './Style/Notifications.style';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Core/Components/Loading/Loading';
import { NotificationSagaActions } from './Store/Notifications.saga';
import Content from './Components/Content';
import Settings from './Components/Settings';
import Profile from '../Dashboard/Components/Profile';
import Advertisement from '../Dashboard/Components/Advertisement';
import FriendList from '../Dashboard/Components/FriendList';
import * as SDash from '../../Pages/Dashboard/Style/Dashboard.style';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import { Button } from '../../Core/Components/Buttons/Button.style';

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
  }, []);

  return (
    <S.Notifications>
      <Profile data={authorizedUser} />
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
        { more && <Button style={{ marginTop: 20}} onClick={fetchNotifications}> Fetch More </Button> }
      </S.NotificationsContent>
      <SDash.SidebarWrapper>
        <Advertisement />
        <FriendList />
      </SDash.SidebarWrapper>
    </S.Notifications>
  );
};

export default Notifications;