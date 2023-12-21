import React from 'react';
import * as S from '../Style/Header.style';
import { IconButton, Tooltip, useMediaQuery } from '@mui/material';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import UserMenu from './UserMenu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Tools = () => {
  const navigate = useNavigate();
  const min600px = useMediaQuery('(min-width: 600px)');
  const { unseenNotificationsCount } = useSelector((state) => state.AppConfig.init);

  const toggleTheme = () => {

  };

  return (
    <S.Tools>
      {/* {
        min600px && <IconButton onClick={toggleTheme} >
          <NightlightRoundIcon />
        </IconButton>
      } */}
      <Tooltip title="Notifications">
        <S.NotificationIconButton count={unseenNotificationsCount} onClick={() => navigate('/notifications')}>
          <NotificationsIcon />
        </S.NotificationIconButton>
      </Tooltip>
      {/* {
        min600px && <IconButton>
          <HelpIcon />
        </IconButton>
      } */}
      <UserMenu />
    </S.Tools>
  );
};

export default Tools;