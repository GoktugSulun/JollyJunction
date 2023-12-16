import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post/Post';
import { DashboardSagaActions } from '../Store/Dashboard.saga';
import PostSkeleton from '../../../Components/Skeletons/PostSkeleton';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, page, limit, canBeMorePost, loading } = useSelector(state => state.Dashboard);

  const fetchMorePost = () => {
    if (canBeMorePost) {
      dispatch(DashboardSagaActions.getPosts({ page, limit }));
    }
  };
   
  return (
    <div className="posts-wrapper">
      {
        posts.map((obj, index) => (
          <Post 
            key={obj.id}
            data={obj}
            {...(posts.length - 1 === index ? { fetchMorePost, isLastElement: true } : {})}
          />
        ))
      }
      { loading?.getPosts && Array.from({ length: 2 }).map((_, i) => <PostSkeleton key={i} />)}
    </div>
  );
};

export default Posts;