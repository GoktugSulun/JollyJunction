import React, { useEffect, useState } from 'react';
import * as S from '../../Style/Header.style';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsContent from './NotificationsContent';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationSagaActions } from './Store/Notification.saga';
import useHttpResponse from '../../../../Core/Hooks/useHttpResponse';
import Loading from '../../../../Core/Components/Loading/Loading';

const menuProps = {
  elevation: 0,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  id: 'demo-customized-menu',
  MenuListProps: {
    'aria-labelledby': 'demo-customized-button',
  }
};

const Notications = () => {
  const dispatch = useDispatch();
  const { notifications, loading } = useSelector((state) => state.Notification);
  const { authorizedUser, unseenNotificationsCount } = useSelector((state) => state.AppConfig.init);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // if (notifications.length) {
    //   dispatch(NotificationSagaActions.getUnreadNotifications(authorizedUser.id));
    // }
    setAnchorEl(null);
  };

  const showAllNotifications = () => {
    console.log('show all notificaitons');
  };

  // const getUnreadNotification= () => {
  //   return notifications.filter((obj) => !obj.read);
  // };

  // useHttpResponse({
  //   success: ({ idleAction }) => {
  //     if (open) {
  //       const unreadNotifications = getUnreadNotification();
  //       if (unreadNotifications.length > 0) {
  //         for (let i=0; i<unreadNotifications.length; i++) {
  //           const payload = {
  //             notification_id: unreadNotifications[i].id,
  //             data: { read: true }
  //           };
  //           dispatch(NotificationSagaActions.updateSeenNotification(payload));
  //         }
  //       }
  //     }
  //     idleAction();
  //   }
  // }, NotificationSagaActions.getNotifications());

  // useEffect(() => {
  //   if (!open) {
  //     return;
  //   }
  //   dispatch(NotificationSagaActions.getNotifications(authorizedUser.id));
  // }, [open]);

  return (
    <S.NoticationsMenuWrapper>
      <S.NotificationIconButton 
        open={open} 
        onClick={handleClick}
        count={unseenNotificationsCount}
      >
        <NotificationsIcon />
      </S.NotificationIconButton>
      <S.StyledMenu
        {...menuProps}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        { loading?.getNotifications && <Loading blur color="#FFFFFF" /> }
        <NotificationsContent handleClose={handleClose} />
        <S.ShowAllButton 
          onClick={showAllNotifications}
        >
          Tümünü Göster 
          <span className="more-count"> ({notifications.length}) </span>
          {/* <span className="more-count"> (+{notifications.length - 4} more) </span> */}
        </S.ShowAllButton>
      </S.StyledMenu>
    </S.NoticationsMenuWrapper>
  );
};

export default Notications;