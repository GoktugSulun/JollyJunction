import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import * as S from '../Style/Notifications.style';
import { Divider } from '../../../Components/Divider/Divider.style';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationSagaActions } from '../Store/Notifications.saga';
import PropTypes from 'prop-types';
import Loading from '../../../Core/Components/Loading/Loading';
import useHttpResponse from '../../../Core/Hooks/useHttpResponse';
import { NotificationActions } from '../Store/Notifications.slice';

const menuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  id: 'notification-settings-menu',
  MenuListProps: {
    'aria-labelledby': 'notification-setting-button',
  }
};

const Settings = ({ data }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { loading, targetNotificationIds, targetRemovedNotificationsIds } = useSelector((state) => state.Notifications);
  
  const handleClick = (event) => {
    event.stopPropagation(); //* Stop bubbling
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event?.stopPropagation(); //* Stop bubbling
    setAnchorEl(null);
  };

  const markAsRead = (event) => { 
    event.stopPropagation(); //* Stop bubbling
    const payload = {
      data: {
        notification_ids: [data.id]
      },
      settings: true,
      snackbar: true
    };
    dispatch(NotificationSagaActions.markNotificationsRead(payload));
  };

  const deleteNotification = (event) => {
    event.stopPropagation(); //* Stop bubbling
    const payload = {
      notification_ids: [data.id]
    };
    dispatch(NotificationSagaActions.deleteNotifications(payload));
  };

  useHttpResponse({
    success: ({ idleAction, payload }) => {
      if (payload?.settings) {
        idleAction();
        if (targetNotificationIds.includes(data.id)) {
          handleClose();
          dispatch(NotificationActions.setTargetNotificationIds([]));
        }
      }
    }
  }, NotificationSagaActions.markNotificationsRead());

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      if (targetRemovedNotificationsIds.includes(data.id)) {
        dispatch(NotificationActions.setTargetRemovedNotificationIds([]));
      }
    }
  }, NotificationSagaActions.deleteNotifications());

  return (
    <S.SettingsWrapper open={open}>
      <IconButton
        id="notification-setting-button"
        aria-controls={open ? 'notification-settings-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <S.SettingsMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        {...menuProps}
      >
        <MenuItem onClick={markAsRead} disabled={(targetNotificationIds.includes(data.id) && loading?.markNotificationsRead) || data.read} >
          {
            (loading?.markNotificationsRead && targetNotificationIds.includes(data.id))
              ? <Loading fullWidth={false} color="#FFFFFF" size={18} />
              : <LibraryBooksIcon />
          } Mark as Read
        </MenuItem>
        <Divider margin="0" />
        <MenuItem onClick={deleteNotification} disabled={(targetRemovedNotificationsIds.includes(data.id) && loading?.deleteNotifications)}>
          {
            (loading?.deleteNotifications && targetRemovedNotificationsIds.includes(data.id))
              ? <Loading fullWidth={false} color="#FFFFFF" size={18} />
              : <DeleteIcon />
          } Delete This Notification
        </MenuItem>
      </S.SettingsMenu>
    </S.SettingsWrapper>
  );
};

export default Settings;

Settings.propTypes = {
  data: PropTypes.object.isRequired
};