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

const Dashboard = () => {
  const dispatch = useDispatch();
  const { posts, page, limit, canBeMorePost } = useSelector(state => state.Dashboard);
  
  // TODO: 'More Post' button and the snackbar message are gonna be removed. Instead of this, I am gonna do scroll & fetch combination. 
  const fetchMorePost = () => {
    if (canBeMorePost) {
      dispatch(DashboardSagaActions.getPosts({ page, limit }));
    }
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      fetchMorePost();
      idleAction();
    }
  }, DashboardSagaActions.createPost());
  
  useEffect(() => {
    fetchMorePost();
  }, []);

  return (
    <S.Dashboard>
      <S.ProfileWrapper>
        <Profile />
      </S.ProfileWrapper>
      <S.PostWrapper>
        <CreatePost />
        {
          posts.map((obj) => (
            <Post 
              key={obj.id}
              data={obj}
            />
          ))
        }
        <Button onClick={fetchMorePost}>
          More Post
        </Button>
      </S.PostWrapper>
      <S.SidebarWrapper>
        <Advertisement />
        <FriendList />
      </S.SidebarWrapper>
    </S.Dashboard>
  );
};

export default Dashboard;