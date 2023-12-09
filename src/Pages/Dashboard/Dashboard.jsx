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
import { PostModalActions } from '../../Components/PostModal/Store/PostModal.slice';
import { ModalTypes } from '../../Core/Constants/Enums';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { posts, page, limit, canBeMorePost, loading } = useSelector(state => state.Dashboard);
  const { authorizedUser } = useSelector(state => state.AppConfig.init);
  
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
    dispatch(DashboardSagaActions.getFriends({ query: `?user_id=${authorizedUser.id}` }));
    return () => {
      dispatch(DashboardActions.setReset());
      dispatch(PostModalActions.handleModal(ModalTypes.CLOSE));
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
            {...(posts.length - 1 === index ? { fetchMorePost, isLast: true } : {})}
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