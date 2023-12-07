import React, { useEffect, useState } from 'react';
import * as S from './Style/Notifications.style';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Core/Components/Loading/Loading';
import { NotificationSagaActions } from './Store/Notifications.saga';
import Content from './Components/Content';
import Settings from './Components/Settings';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import { NotificationActions } from './Store/Notifications.slice';
import { DashboardSagaActions } from '../Dashboard/Store/Dashboard.saga';
import { PostModalActions } from '../../Components/PostModal/Store/PostModal.slice';
import { ModalTypes, NotificationTypes } from '../../Core/Constants/Enums';
import { PostModalSagaActions } from '../../Components/PostModal/Store/PostModal.saga';
import FriendshipEnums from '../../server/constants/Enums/FriendshipEnums';
import { useNavigate } from 'react-router-dom';
import intersectionObserver from '../../Core/Helpers/intersectionObserver';

const Notifications = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadingId, setLoadingId] = useState(null);
  const { loading, notifications, page, limit, canBeMore } = useSelector((state) => state.Notifications);
  const { loading: postModalLoading } = useSelector((state) => state.PostModal);
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);

  const fetchNotifications = () => {
    if (canBeMore) {
      const payload = {
        queries: `?page=${page}&limit=${limit}&receiver_id=${authorizedUser.id}&is_removed=${false}`
      };
      dispatch(NotificationSagaActions.getNotifications(payload));
    }
  };

  const getPostDetail = (post_id, notification_id, sender_user, type) => {
    if (post_id) {
      setLoadingId(notification_id);
      dispatch(PostModalSagaActions.getSpecificPost({ post_id }));
      return;
    }
    if (type === NotificationTypes.ACCEPTED_FRIENDSHIP_REQUEST || type === NotificationTypes.YOU_ARE_FRIEND_NOW) {
      setLoadingId(notification_id);
      const payload = { 
        data: { 
          notification_ids: [ notification_id ] 
        },
        snackbar: false,
        navigate: true,
        url: `/profile/${sender_user.name.split(' ').join('')}${sender_user.surname}/${sender_user.id}`
      };
      dispatch(NotificationSagaActions.markNotificationsRead(payload));
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
    const element = Array.from(document.querySelectorAll('.notification-item'))?.at(-1);
    intersectionObserver(element, fetchNotifications, 0.8);
  }, [notifications]);

  useEffect(() => {
    const payload = {
      queries: `?page=${1}&limit=${limit}&receiver_id=${authorizedUser.id}&is_removed=${false}`
    };
    dispatch(NotificationSagaActions.getNotifications(payload));
    const friendPayload = { query: `?user_id=${authorizedUser.id}` };
    dispatch(DashboardSagaActions.getFriends(friendPayload));
    return () => {
      dispatch(NotificationActions.setReset());
      dispatch(PostModalActions.handleModal(ModalTypes.CLOSE));
    };
  }, []);

  return (
    <S.NotificationsContent>
      {
        notifications.map((obj) => (
          <S.NotificationItem 
            className="notification-item"
            key={obj.id}
            disabled={postModalLoading?.getSpecificPost}
            onClick={() => getPostDetail(obj.post_id, obj.id, obj.sender_user, obj.type)} 
          >
            { postModalLoading?.getSpecificPost && loadingId === obj.id && <S.ProgressBar /> }
            <Content data={obj} />
            <Settings data={obj} />
          </S.NotificationItem>
        ))
      }
      { loading?.getNotifications && <Loading margin="15px 0 0 0" /> }
    </S.NotificationsContent>
  );
};

export default Notifications;