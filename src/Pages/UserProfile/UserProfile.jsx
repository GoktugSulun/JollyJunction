import React, { useEffect } from 'react';
import * as S from './Style/UserProfile.style';
import Profile from '../Dashboard/Components/Profile';
import Post from '../Dashboard/Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Core/Components/Loading/Loading';
import NoData from './Components/NoData';
import { useParams } from 'react-router-dom';
import { UserProfileSagaActions } from './Store/UserProfile.saga';
import { Button } from '../../Core/Components/Buttons/Button.style';
import { UserProfileActions } from './Store/UserProfile.slice';
import { DashboardSagaActions } from '../Dashboard/Store/Dashboard.saga';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';

const UserProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { user: authorizedUser } = useSelector((state) => state.Login);
  const { posts, loading, page, limit, canBeMorePost, user } = useSelector((state) => state.UserProfile);

  // TODO: 'More Post' button and the snackbar message are gonna be removed. Instead of this, I am gonna do scroll & fetch combination. 
  const fetchMorePost = () => {
    if (canBeMorePost) {
      dispatch(UserProfileSagaActions.getPosts({ page, limit, user_id: params.id }));
    }
  };

  const sortedPosts = () => {
    const sortedArrays = [...posts];
    sortedArrays.sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    return sortedArrays;
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      dispatch(DashboardSagaActions.getNotificationsICreated(authorizedUser.id));
      idleAction();
    }
  }, DashboardSagaActions.addFriend());

  useEffect(() => {
    dispatch(UserProfileSagaActions.getPosts({ page, limit, user_id: Number(params.id) }));
    dispatch(DashboardSagaActions.getNotificationsICreated(authorizedUser.id));
    if (Number(params.id) !== authorizedUser?.id) {
      dispatch(UserProfileSagaActions.getSpecificUser({ user_id: Number(params.id) }));
    }
  }, [params.id, authorizedUser]);

  useEffect(() => {
    return () => {
      dispatch(UserProfileActions.setReset());
    };
  }, []);

  return (
    <S.UserProfile>
      <Profile data={authorizedUser.id === Number(params.id) ? authorizedUser : user} />
      <div className="post-wrapper">
        {
          !posts.length && loading?.getPosts === false
            ? <NoData />
            : sortedPosts().map((obj) => (
              <Post 
                key={obj.id}
                data={obj}
              />
            ))
        }
        { loading?.getPosts && !posts.length && <div className="loading-container"> <Loading /> </div> }
        {
          posts.length && canBeMorePost
            && (<div className="more-button-container">
              <Button onClick={fetchMorePost}> More Post </Button>
            </div>)
        }
      </div>
    </S.UserProfile>
  );
};

export default UserProfile;