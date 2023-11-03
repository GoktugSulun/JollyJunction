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
import { NotificationSagaActions } from '../../Components/Header/Components/Notifications/Store/Notification.saga';
import { DashboardActions } from './Store/Dashboard.slice';
import PostModal from '../../Components/PostModal/PostModal';
import { request } from '../../Core/Request/Request';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { posts, page, limit, canBeMorePost, loading } = useSelector(state => state.Dashboard);
  const { user: authorizedUser } = useSelector(state => state.Login);
  
  // TODO: 'More Post' button and the snackbar message are gonna be removed. Instead of this, I am gonna do scroll & fetch combination. 
  const fetchMorePost = () => {
    if (canBeMorePost) {
      dispatch(DashboardSagaActions.getPosts({ page, limit }));
    }
  };

  const sortedPosts = () => {
    const sortedArrays = [...posts];
    sortedArrays.sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    return sortedArrays;
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
    }
  }, DashboardSagaActions.createPost());

  useHttpResponse({
    success: ({ idleAction }) => {
      dispatch(DashboardSagaActions.getNotificationsICreated(authorizedUser.id));
      idleAction();
    }
  }, DashboardSagaActions.addFriend());

  useEffect(() => {
    fetchMorePost();
    // dispatch(DashboardSagaActions.getNotificationsICreated(authorizedUser.id));
    // dispatch(NotificationSagaActions.getUnreadNotifications(authorizedUser.id));
    return () => {
      dispatch(DashboardActions.setReset());
    };
  }, []);

  return (
    <S.Dashboard>
      <S.ProfileWrapper>
        <Profile data={authorizedUser} />
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
          sortedPosts().map((obj) => (
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
      <S.SidebarWrapper>
        <Advertisement />
        <FriendList />
      </S.SidebarWrapper>
      <PostModal />
    </S.Dashboard>
  );
};

export default Dashboard;