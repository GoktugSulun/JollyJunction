import React, { useEffect, useState } from 'react';
import * as S from './Style/Notifications.style';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Core/Components/Loading/Loading';
import { NotificationSagaActions } from './Store/Notifications.saga';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import { NotificationActions } from './Store/Notifications.slice';
import { DashboardSagaActions } from '../Dashboard/Store/Dashboard.saga';
import { PostModalActions } from '../../Components/PostModal/Store/PostModal.slice';
import { ModalTypes } from '../../Core/Constants/Enums';
import { PostModalSagaActions } from '../../Components/PostModal/Store/PostModal.saga';
import FriendshipEnums from '../../server/constants/Enums/FriendshipEnums';
import { useNavigate } from 'react-router-dom';
import Notification from './Components/Notification';

const Notifications = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadingId, setLoadingId] = useState(null);
  const { loading, notifications, page, limit, canBeMore } = useSelector((state) => state.Notifications);
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);

  const fetchNotifications = () => {
    if (canBeMore) {
      const payload = {
        queries: `?page=${page}&limit=${limit}&receiver_id=${authorizedUser.id}&is_removed=${false}`
      };
      dispatch(NotificationSagaActions.getNotifications(payload));
    }
  };

  useHttpResponse({
    success: ({ idleAction, payload }) => {
      if (payload?.navigate) {
        idleAction();
        navigate(payload.url);
      }
    }
  }, NotificationSagaActions.markNotificationsRead());

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      const read = notifications.find((obj) => obj.id === loadingId).read;
      if (!read) {
        const payload = { 
          data: { 
            notification_ids: [ loadingId ] 
          }
        };
        dispatch(NotificationSagaActions.markNotificationsRead(payload));
      }
      dispatch(PostModalActions.handleModal(ModalTypes.OPEN));
      setLoadingId(null);
    },
    failure: ({ idleAction }) => {
      idleAction();
      setLoadingId(null);
    }
  }, PostModalSagaActions.getSpecificPost());

  useHttpResponse({
    success: ({ idleAction, payload }) => {
      idleAction();
      if (payload.type === FriendshipEnums.ACCEPT) {
        const payload = { query: `?user_id=${authorizedUser.id}` };
        dispatch(DashboardSagaActions.getFriends(payload));
      }
    }
  }, NotificationSagaActions.friendship());

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
    dispatch(NotificationSagaActions.getNotifications({ queries: `?page=${1}&limit=${limit}&receiver_id=${authorizedUser.id}&is_removed=${false}` }));
    dispatch(DashboardSagaActions.getFriends({ query: `?user_id=${authorizedUser.id}` }));
    return () => {
      dispatch(NotificationActions.setReset());
      dispatch(PostModalActions.handleModal(ModalTypes.CLOSE));
    };
  }, []);

  return (
    <S.NotificationsContent>
      { notifications.map((obj, index) => 
        <Notification 
          key={obj.id} 
          data={obj} 
          {...(notifications.length - 1 === index ? { fetchNotifications, isLastElement: true } : {})}
          loadingState={[loadingId, setLoadingId]}
        />
      )}
      { loading?.getNotifications && <Loading margin="15px 0 0 0" /> }
    </S.NotificationsContent>
  );
};

export default Notifications;