import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Settings from './Settings';
import * as S from '../Style/Notifications.style';
import Content from './Content';
import { NotificationTypes } from '../../../Core/Constants/Enums';
import { NotificationSagaActions } from '../Store/Notifications.saga';
import { PostModalSagaActions } from '../../../Components/PostModal/Store/PostModal.saga';
import { useIntersectionObserver } from '../../../Hooks/useIntersectionObserver';

const options = {
  threshold: 0.5
};

const Notification = ({ data, isLastElement, loadingState, fetchNotifications }) => {
  const dispatch = useDispatch();
  const [loadingId, setLoadingId] = loadingState;
  const { loading: postModalLoading } = useSelector((state) => state.PostModal);
  const { ref, isIntersecting } = useIntersectionObserver({ options, triggerOnce: true });

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

  useEffect(() => {
    if (isIntersecting) {
      fetchNotifications();
    }
  }, [isIntersecting]);

  return (
    <S.NotificationItem 
      className="notification-item"
      disabled={postModalLoading?.getSpecificPost}
      onClick={() => getPostDetail(data.post_id, data.id, data.sender_user, data.type)} 
      {...(isLastElement ? { ref } : {})}
    >
      { postModalLoading?.getSpecificPost && loadingId === data.id && <S.ProgressBar /> }
      <Content data={data} />
      <Settings data={data} />
    </S.NotificationItem>
  );
};

export default Notification;

Notification.propTypes = {
  data: PropTypes.object.isRequired,
  loadingState: PropTypes.array.isRequired,
  isLastElement: PropTypes.bool,
  fetchNotifications: PropTypes.func,
};

Notification.defaultProps = {
  isLastElement: false,
  fetchNotifications: () => {}
};