import React from 'react';
import * as S from './Layout.style';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import Profile from '../Dashboard/Components/Profile';
import PostModal from '../../Components/PostModal/PostModal';
import Sidebar from './Components/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const { pathname } = useLocation();
  const { authorizedUser } = useSelector(state => state.AppConfig.init);
  const { user } = useSelector(state => state.UserProfile);
  const min1200px = useMediaQuery('(min-width: 1200px)');

  return (
    <S.Layout>
      <S.ProfileWrapper>
        <Profile data={pathname.includes('profile') ? user : authorizedUser} />
        { !min1200px && <Sidebar /> }
      </S.ProfileWrapper>
      <Outlet />
      { min1200px && <Sidebar /> }
      <PostModal />
    </S.Layout>
  );
};

export default Layout;