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

const Notifications = () => {
  const dispatch = useDispatch();
  const { loading, notifications } = useSelector((state) => state.Notifications);
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);

  useEffect(() => {
    const payload = {
      queries: `?receiver_id=${authorizedUser.id}&is_removed=false`
    };
    dispatch(NotificationSagaActions.getNotifications(payload));
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
      </S.NotificationsContent>
      <SDash.SidebarWrapper>
        <Advertisement />
        <FriendList />
      </SDash.SidebarWrapper>
    </S.Notifications>
  );
};

export default Notifications;