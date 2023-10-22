import React from 'react';
import { useSelector } from 'react-redux';
import { UserImages } from '../../../../assets/Pngs/Pngs';
import { NotificationTypes } from '../../../../Core/Constants/Enums';
import { MenuItem } from '@mui/material';
import * as S from '../../Style/Header.style';
import { Button } from '../../../../Core/Components/Buttons/Button.style';

const NotificationsContent = () => {
  const { notifications } = useSelector((state) => state.Dashboard);

  const getUserSrc = () => {
    return UserImages.find((src) => src.includes(notifications?.[0]?.sender_user?.img)) || null;
};

  const getNotificationMessage = (obj) => {
    switch (obj.type) {
      case NotificationTypes.REQUEST_FOR_FRIENDSHIP:
        return 'sent you a friendship request.';
      case NotificationTypes.ADDED_FRIEND:
        return 'accepted your friendship request.';
      case NotificationTypes.LIKED_POST:
        return 'liked your post.';
      case NotificationTypes.COMMENTED_POST:
        return 'commented on your post.';
      default:
        throw new Error('undefined notification type!');
    }
  };

  const approveHandler = (e) => {
    console.log('clicked approve');
  };

  const deleteHandler = (e) => {
    console.log('clicked delete');
  };

  const notificationHandler = (e) => {
    // e.stopPropagation();
    // e.preventDefault();
    console.log('clicked noti');
  };

  const showAllNotifications = () => {
    console.log('show all notificaitons');
  };

  if (!notifications.length) {
    return (
      <MenuItem>
        There is no notification.
      </MenuItem>
    );
  }

  return (
    <div className="menu-item-container">
        {
          notifications.slice(-4).map((obj) => (
            <MenuItem onClick={notificationHandler} key={obj.id} >
              <S.NotificationItem>
                <img alt="sender-user" src={getUserSrc()} />
                <p className="description">
                  <span className="description__sender-user"> { `${obj.sender_user.name} ${obj.sender_user.surname}` } </span>
                  <span className="description__text"> {getNotificationMessage(obj)} </span>
                  <span className="description__date"> 4g </span>
                </p>
                {
                  obj.type === NotificationTypes.REQUEST_FOR_FRIENDSHIP 
                    && (
                      <div className="buttons">
                        <Button onClick={approveHandler}>
                          Approve
                        </Button>
                        <Button
                          bgColor="#484747"
                          onClick={deleteHandler}
                        >
                          Delete
                        </Button>
                      </div>
                    )
                }
              </S.NotificationItem>
            </MenuItem>
            ))
        }
        {
          notifications.length > 4 
            && (
              <S.ShowAllButton onClick={showAllNotifications}>
                Tümünü Göster <span className="more-count"> (+{notifications.length - 4} more) </span>
              </S.ShowAllButton>
            ) 
        }
      </div>
  );
};

export default NotificationsContent;