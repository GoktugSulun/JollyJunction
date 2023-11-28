import React, { useEffect } from 'react';
import * as S from './Style/Dashboard.style';
import CreatePost from './Components/Post/CreatePost';
import Post from './Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSagaActions } from './Store/Dashboard.saga';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import Loading from '../../Core/Components/Loading/Loading';
import { DashboardActions } from './Store/Dashboard.slice';
import { AppConfigSagaActions } from '../../Core/Store/AppConfig.saga';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { posts, page, limit, canBeMorePost, loading } = useSelector(state => state.Dashboard);
  const { authorizedUser } = useSelector(state => state.AppConfig.init);
  
  const fetchMorePost = () => {
    if (canBeMorePost) {
      dispatch(DashboardSagaActions.getPosts({ page, limit }));
    }
  };

  const observePosts = () => {
    const posts = Array.from(document.querySelectorAll('.post'));
    const lastElement = posts.at(-1);
    if (!lastElement) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.unobserve(lastElement);
        fetchMorePost();
      }
    });
    observer.observe(lastElement, { threshold: 0.8 }); //! Doesnt work threshold :(
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
    }
  }, DashboardSagaActions.createPost());

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      observePosts();
    }
  }, DashboardSagaActions.getPosts());

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
    <S.PostWrapper id="wrapper">
      <CreatePost />
      {
        loading?.createPost &&
          (<div className="loading-container">
            <Loading size={50} /> 
          </div>)
      }
      {
        posts.map((obj, index) => (
          <Post 
            key={obj.id}
            data={obj}
            index={index}
          />
        ))
      }
      {
        loading?.getPosts &&
          (<div className="loading-container">
            <Loading size={50} />
          </div>)
      }
    </S.PostWrapper>
  );
};

export default Dashboard;