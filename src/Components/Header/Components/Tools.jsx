import React from 'react';
import * as S from '../Style/Header.style';
import { IconButton } from '@mui/material';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import HelpIcon from '@mui/icons-material/Help';
import UserMenu from './UserMenu';
import Notifications from './Notifications/Notifications';

const Tools = () => {

   const toggleTheme = () => {

   };

  return (
    <S.Tools>
      <IconButton onClick={toggleTheme} >
         <NightlightRoundIcon />
      </IconButton>
      <Notifications />
      <IconButton>
         <HelpIcon />
      </IconButton>
      <UserMenu />
    </S.Tools>
  );
};

export default Tools;