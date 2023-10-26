import React from 'react';
import * as S from './Style/UserProfile.styled';
import Profile from '../Dashboard/Components/Profile';
import Post from '../Dashboard/Components/Post/Post';
import { useSelector } from 'react-redux';
import Loading from '../../Core/Components/Loading/Loading';
import NoData from './Components/NoData';

const UserProfile = () => {
  const { posts, loading } = useSelector((state) => state.UserProfile);

  return (
    <S.UserProfile>
      <Profile />
      <div className="post-wrapper">
        {
          loading?.getPosts 
            ? <Loading />
            : !posts.length
              ? <NoData />
              : posts.map((obj) => (
                <Post 
                  key={obj.id}
                  data={obj}
                />
              ))
        }
      </div>
    </S.UserProfile>
  );
};

export default UserProfile;