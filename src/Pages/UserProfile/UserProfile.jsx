import React, { useEffect } from 'react';
import * as S from './Style/UserProfile.styled';
import Profile from '../Dashboard/Components/Profile';
import Post from '../Dashboard/Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Core/Components/Loading/Loading';
import NoData from './Components/NoData';
import { useParams } from 'react-router-dom';
import { UserProfileSagaActions } from './Store/UserProfile.saga';
import { Button } from '../../Core/Components/Buttons/Button.style';

const UserProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { posts, loading, page, limit, canBeMorePost } = useSelector((state) => state.UserProfile);

  // TODO: 'More Post' button and the snackbar message are gonna be removed. Instead of this, I am gonna do scroll & fetch combination. 
  const fetchMorePost = () => {
    if (canBeMorePost) {
      dispatch(UserProfileSagaActions.getPosts({ page, limit, user_id: params.id }));
    }
  };

  useEffect(() => {
    if (params?.id) {
      dispatch(UserProfileSagaActions.getPosts({ page, limit, user_id: params.id }));
    }
  }, [params?.id]);

  return (
    <S.UserProfile>
      <Profile />
      <div className="post-wrapper">
        {
          !posts.length && loading?.getPosts === false
            ? <NoData />
            : posts.map((obj) => (
              <Post 
                key={obj.id}
                data={obj}
              />
            ))
        }
        { loading?.getPosts && !posts.length && <div className="loading-container"> <Loading /> </div> }
        {
          posts.length 
            && (<div className="more-button-container">
              <Button onClick={fetchMorePost}> More Post </Button>
            </div>)
        }
      </div>
    </S.UserProfile>
  );
};

export default UserProfile;