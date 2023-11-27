import React, { useEffect } from 'react';
import * as S from './Style/Dashboard.style';
import CreatePost from './Components/Post/CreatePost';
import Post from './Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSagaActions } from './Store/Dashboard.saga';
import { Button } from '../../Core/Components/Buttons/Button.style';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import Loading from '../../Core/Components/Loading/Loading';
import { DashboardActions } from './Store/Dashboard.slice';
import { AppConfigSagaActions } from '../../Core/Store/AppConfig.saga';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { posts, page, limit, canBeMorePost, loading } = useSelector(state => state.Dashboard);
  const { authorizedUser } = useSelector(state => state.AppConfig.init);
  
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
      dispatch(AppConfigSagaActions.getUnseenNotifications({ query: `?is_removed=false&seen=false&receiver_id=${authorizedUser.id}`}));
      dispatch(DashboardSagaActions.getFriends({ query: `?user_id=${authorizedUser.id}` }));
    }
  }, DashboardSagaActions.acceptFriendship());

  useEffect(() => {
    dispatch(DashboardSagaActions.getPosts({ page: 1, limit: 10 }));
    const payload = { query: `?user_id=${authorizedUser.id}` };
    dispatch(DashboardSagaActions.getFriends(payload));
    return () => {
      dispatch(DashboardActions.setReset());
    };
  }, []);

  return (
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
  );
};

export default Dashboard;