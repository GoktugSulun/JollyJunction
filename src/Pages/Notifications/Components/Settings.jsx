import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import * as S from '../Style/Notifications.style';
import { Divider } from '../../../Components/Divider/Divider.style';

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

const Settings = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <DeleteIcon />  Delete This Notification
        </MenuItem>
        <Divider margin="0" />
        <MenuItem onClick={handleClose}>
          <LibraryBooksIcon /> Mark as Read
        </MenuItem>
      </S.SettingsMenu>
    </S.SettingsWrapper>
  );
};

export default Settings;