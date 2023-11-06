import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NotificationTypes from '../../../Core/Constants/Enums/NotificationTypes';
import moment from 'moment';
import * as S from '../Style/Notifications.style';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import { getUserImageURL } from '../../../assets/Pngs/Pngs';
import Loading from '../../../Core/Components/Loading/Loading';

const NotificationsContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notifications, loading } = useSelector((state) => state.Notifications);
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);

  const getNotificationMessage = (type) => {
    switch (type) {
    case NotificationTypes.REQUEST_FOR_FRIENDSHIP:
      return 'sent you a friendship request.';
    case NotificationTypes.LIKED_POST:
      return 'liked your post.';
    case NotificationTypes.COMMENTED_POST:
      return 'commented on your post.';
    case NotificationTypes.ACCEPTED_FRIENDSHIP_REQUEST:
      return 'accepted your friendship request.';
    case NotificationTypes.YOU_ARE_FRIEND_NOW:
      return 'and you are friends now.';
    default:
      throw new Error('undefined notification type!');
    }
  };

  const acceptHandler = ({ notification_id, sender_user }) => {
    const payload = {
      notification_id,
      dataForNotificationWillBeRemoved: {
        is_removed: true
      },
      dataForSenderUser: {
        sender_user: { ...authorizedUser },
        receiver_user: { ...sender_user },
        type: NotificationTypes.ACCEPTED_FRIENDSHIP_REQUEST,
        created_at: new Date(),
        read: false,
        is_removed: false
      },
      dataForReceiverUser: {
        sender_user: { ...sender_user },
        receiver_user: { ...authorizedUser },
        type: NotificationTypes.YOU_ARE_FRIEND_NOW,
        created_at: new Date(),
        read: true,
        is_removed: false
      },
      user_id: authorizedUser.id,
      newUserList: { friends: [sender_user, ...authorizedUser.friends] }
    };
    // dispatch(NotificationSagaActions.acceptFriendshipRequest(payload));
  };

  const deleteHandler = (notification_id) => {
    const payload = {
      notification_id,
      data: {
        is_removed: true
      }
    };
    // dispatch(NotificationSagaActions.rejectFriendshipRequest(payload));
  };

  const notificationHandler = (e) => {
    // e.stopPropagation();
    // e.preventDefault();
    console.log('clicked noti');
  };

  const getDate = (created_at) => {
    const diff = moment.duration(moment().diff(created_at)).humanize();
    return `${diff} ago`;
  };

  const navigateToUserProfile = (user) => {
    const url = `/profile/${user.name.split(' ').join('')}${user.surname}/${user.id}`;
    navigate(url);
  };

  return (
    <S.NotificationsContent>
      {
        notifications.map((obj) => (
          <S.NotificationItem
            read={obj.read} 
            key={obj.id} >
            <img alt="sender-user" src={getUserImageURL(obj?.sender_user?.img)} />
            <p className="description">
              <Button 
                className="description__sender-user"
                bgColor="transparent"
                padding="0"
                onClick={() => navigateToUserProfile(obj.sender_user)}
              >  
                { `${obj.sender_user.name} ${obj.sender_user.surname}` } 
              </Button>
              <span className="description__text"> {getNotificationMessage(obj.type)} </span>
              <span className="description__date"> {getDate(obj.created_at)} </span>
            </p>
            {
              obj.type === NotificationTypes.REQUEST_FOR_FRIENDSHIP 
                  && (
                    <div className="buttons">
                      <Button 
                        disabled={loading?.rejectFriendshipRequest || loading?.acceptFriendshipRequest}
                        onClick={() => acceptHandler({ notification_id: obj.id, sender_user: obj.sender_user })}
                      >
                        { loading?.acceptFriendshipRequest ? <Loading size={25} color="#FFFFFF" /> : 'Accept' }
                      </Button>
                      <Button
                        bgColor="#484747"
                        disabled={loading?.rejectFriendshipRequest || loading?.acceptFriendshipRequest}
                        onClick={() => deleteHandler(obj.id)}
                      >
                        { loading?.rejectFriendshipRequest ? <Loading size={25} color="#FFFFFF" /> : 'Delete' }
                      </Button>
                    </div>
                  )
            }
          </S.NotificationItem>
        ))
      }
    </S.NotificationsContent>
  );
};

export default NotificationsContent;