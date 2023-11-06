import React from 'react';
import * as S from '../Style/Header.style';
import { IconButton } from '@mui/material';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import UserMenu from './UserMenu';
import { useNavigate } from 'react-router-dom';

const Tools = () => {
  const navigate = useNavigate();

  const toggleTheme = () => {

  };

  return (
    <S.Tools>
      <IconButton onClick={toggleTheme} >
        <NightlightRoundIcon />
      </IconButton>
      <IconButton onClick={() => navigate('/notifications')}>
        <NotificationsIcon />
      </IconButton>
      <IconButton>
        <HelpIcon />
      </IconButton>
      <UserMenu />
    </S.Tools>
  );
};

export default Tools;