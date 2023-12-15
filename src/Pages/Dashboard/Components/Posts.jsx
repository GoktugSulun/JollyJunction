import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post/Post';
import { DashboardSagaActions } from '../Store/Dashboard.saga';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, page, limit, canBeMorePost } = useSelector(state => state.Dashboard);

  const fetchMorePost = () => {
    if (canBeMorePost) {
      dispatch(DashboardSagaActions.getPosts({ page, limit }));
    }
  };
   
  return <div className="posts-wrapper">
    {
      posts.map((obj, index) => (
        <Post 
          key={obj.id}
          data={obj}
          {...(posts.length - 1 === index ? { fetchMorePost, isLastElement: true } : {})}
        />
      ))
    }
  </div>;
};

export default Posts;