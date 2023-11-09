import React, { useEffect } from 'react';
import * as S from './Style/Dashboard.style';
import Profile from './Components/Profile';
import Advertisement from './Components/Advertisement';
import FriendList from './Components/FriendList';
import CreatePost from './Components/Post/CreatePost';
import Post from './Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSagaActions } from './Store/Dashboard.saga';
import { Button } from '../../Core/Components/Buttons/Button.style';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import Loading from '../../Core/Components/Loading/Loading';
import PostModal from '../../Components/PostModal/PostModal';
import { useMediaQuery } from '@mui/material';
import { DashboardActions } from './Store/Dashboard.slice';
import { AppConfigSagaActions } from '../../Core/Store/AppConfig.saga';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { posts, page, limit, canBeMorePost, loading } = useSelector(state => state.Dashboard);
  const { authorizedUser } = useSelector(state => state.AppConfig.init);
  const min1200px = useMediaQuery('(min-width: 1200px)');
  
  // TODO: 'More Post' button and the snackbar message are gonna be removed. Instead of this, I am gonna do scroll & fetch combination. 
  const fetchMorePost = () => {
    if (canBeMorePost) {
      dispatch(DashboardSagaActions.getPosts({ page, limit }));
    }
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
    }
  }, DashboardSagaActions.createPost());

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      const payload = {
        query: `?is_removed=false&seen=false&receiver_id=${authorizedUser.id}`
      };
      dispatch(AppConfigSagaActions.getUnseenNotifications(payload));
    }
  }, DashboardSagaActions.acceptFriendship());

  useEffect(() => {
    fetchMorePost();
    const payload = { query: `?user_id=${authorizedUser.id}` };
    dispatch(DashboardSagaActions.getFriends(payload));
    return () => {
      dispatch(DashboardActions.setReset());
    };
  }, []);

  return (
    <S.Dashboard>
      <S.ProfileWrapper>
        <Profile data={authorizedUser} />
        {
          !min1200px && <S.SidebarWrapper>
            <Advertisement />
            <FriendList />
          </S.SidebarWrapper>
        }
      </S.ProfileWrapper>
      <S.PostWrapper>
        <CreatePost />
        {
          loading?.createPost &&
            (<div className="loading-container">
              <Loading size={50} />
            </div>)
        }
        {
          posts.map((obj) => (
            <Post 
              key={obj.id}
              data={obj}
            />
          ))
        }
        {
          loading?.getPosts &&
            (<div className="loading-container">
              <Loading size={50} />
            </div>)
        }
        {
          !!posts.length && canBeMorePost
            && (<div className="more-button-container">
              <Button onClick={fetchMorePost}> More Post </Button>
            </div>)
        }
      </S.PostWrapper>
      {
        min1200px && <S.SidebarWrapper>
          <Advertisement />
          <FriendList />
        </S.SidebarWrapper>
      }
      <PostModal />
    </S.Dashboard>
  );
};

export default Dashboard;