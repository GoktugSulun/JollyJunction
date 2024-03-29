import React from 'react';
import * as S from './Layout.style';
import { useMediaQuery } from '@mui/material';
import Profile from '../Dashboard/Components/Profile';
import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const min1200px = useMediaQuery('(min-width: 1200px)');

  return (
    <S.Layout>
      <S.ProfileWrapper>
        <Profile />
        { !min1200px && <Sidebar /> }
      </S.ProfileWrapper>
      <Outlet />
      { min1200px && (<S.SidebarWrapper> <Sidebar /> </S.SidebarWrapper>)}
    </S.Layout>
  );
};

export default Layout;