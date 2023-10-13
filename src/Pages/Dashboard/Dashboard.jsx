import React from 'react';
import * as S from './Style/Dashboard.style';
import Profile from './Components/Profile';
import Advertisement from './Components/Advertisement';
import FriendList from './Components/FriendList';
import CreatePost from './Components/Post/CreatePost';

const Dashboard = () => {
  return (
    <S.Dashboard>
      <S.ProfileWrapper>
        <Profile />
      </S.ProfileWrapper>
      <S.PostWrapper>
        <CreatePost />
      </S.PostWrapper>
      <S.SidebarWrapper>
        <Advertisement />
        <FriendList />
      </S.SidebarWrapper>
    </S.Dashboard>
  );
};

export default Dashboard;