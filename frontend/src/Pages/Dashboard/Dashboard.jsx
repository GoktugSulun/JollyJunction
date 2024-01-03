import React, { useEffect } from 'react';
import * as S from './Style/Dashboard.style';
import CreatePost from './Components/Post/CreatePost';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSagaActions } from './Store/Dashboard.saga';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import { DashboardActions } from './Store/Dashboard.slice';
import { AppConfigSagaActions } from '../../Core/Store/AppConfig.saga';
import Posts from './Components/Posts';
import { PostSkeleton } from '../../Components/Skeletons';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, limitForFriendList, pageForFriendList, friends } = useSelector(state => state.Dashboard);
  const { authorizedUser } = useSelector(state => state.AppConfig.init);

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
    }
  }, DashboardSagaActions.createPost());

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      dispatch(AppConfigSagaActions.getUnseenNotifications({ query: `?is_removed=false&seen=false&receiver_id=${authorizedUser.id}`}));
      dispatch(DashboardSagaActions.getFriends({ query: `?user_id=${authorizedUser.id}&page=${pageForFriendList}&limit=${limitForFriendList}&is_removed=false` }));
    }
  }, DashboardSagaActions.acceptFriendship());

  useEffect(() => {
    dispatch(DashboardSagaActions.getPosts({ page: 1, limit: 10 }));
    if (!friends.length) {
      dispatch(DashboardSagaActions.getFriends({ query: `?user_id=${authorizedUser.id}&page=1&limit=${limitForFriendList}&is_removed=false` }));
    }
    return () => {
      dispatch(DashboardActions.setReset());
    };
  }, []);

  return (
    <S.PostWrapper>
      <CreatePost />
      { loading?.createPost && <PostSkeleton /> }
      <Posts />
    </S.PostWrapper>
  );
};

export default Dashboard;