import React from 'react';
import * as S from '../../Style/Dashboard.style';
import PropTypes from 'prop-types';
import PostHeader from './Components/PostHeader';
import PostBody from './Components/PostBody';
import PostFooter from './Components/PostFooter';
import { useDispatch } from 'react-redux';
import { DashboardSagaActions } from '../../Store/Dashboard.saga';

const Post = ({ data }) => {
  const dispatch = useDispatch();

  const likeHandler = () => {
    const payload = {
      like: !data.liked,
      post_id: data.id
    };
    dispatch(DashboardSagaActions.likePost(payload));
  }; 

  return (
    <S.Post className="post">
      <PostHeader data={data} />
      <PostBody 
        likeHandler={likeHandler} 
        data={data} 
      />
      <PostFooter 
        likeHandler={likeHandler} 
        data={data} 
      />
    </S.Post>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.object.isRequired,
};