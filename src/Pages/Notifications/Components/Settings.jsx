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
  const { loading, targetNotificationIds } = useSelector((state) => state.Notifications);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const markAsRead = () => { 
    const payload = {
      notification_ids: [data.id]
    };
    dispatch(NotificationSagaActions.markNotificationsRead(payload));
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      if (targetNotificationIds.includes(data.id)) {
        handleClose();
        dispatch(NotificationActions.setTargetNotificationIds([]));
      }
    }
  }, NotificationSagaActions.markNotificationsRead());

  return (
    <S.SettingsWrapper>
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
        <MenuItem onClick={handleClose}>
          <DeleteIcon /> Delete This Notification
        </MenuItem>
        <Divider margin="0" />
        <MenuItem onClick={markAsRead} disabled={(targetNotificationIds.includes(data.id) && loading?.markNotificationsRead) || data.read} >
          {
            (loading?.markNotificationsRead && targetNotificationIds.includes(data.id))
              ? <Loading fullWidth={false} color="#FFFFFF" size={18} />
              : <LibraryBooksIcon />
          } Mark as Read
        </MenuItem>
      </S.SettingsMenu>
    </S.SettingsWrapper>
  );
};

export default Settings;

Settings.propTypes = {
  data: PropTypes.object.isRequired
};