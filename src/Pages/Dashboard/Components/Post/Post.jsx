import React from 'react';
import * as S from '../../Style/Dashboard.style';
import PropTypes from 'prop-types';
import PostHeader from './Components/PostHeader';
import PostBody from './Components/PostBody';
import PostFooter from './Components/PostFooter';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationTypes } from '../../../../Core/Constants/Enums';
import { DashboardSagaActions } from '../../Store/Dashboard.saga';

const Post = ({ data }) => {
  const dispatch = useDispatch();
  const { user: authorizedUser } = useSelector((state) => state.Login);

  const isItLiked = () => {
    return !!data.likes.find((user_id) => user_id === authorizedUser?.id);
  };

  const likeHandler = () => {
    const updatedData = {
      ...data,
      likes: isItLiked() 
        ? data.likes.filter((user_id) => user_id !== authorizedUser.id)
        : [...data.likes, authorizedUser.id]
    };
    const notificationData = {
      sender_user: { ...authorizedUser },
      receiver_user: { ...data.user },
      type: NotificationTypes.LIKED_POST,
      created_at: new Date().toString(),
      read: false,
      is_removed: false,
    };
    const payload = {
      post_id: data.id,
      data: updatedData,
      ...(authorizedUser.id === data.user.id ? {} : {notificationData}),
      liked: !isItLiked()
    };
    dispatch(DashboardSagaActions.likePost(payload));
  };

  return (
    <S.Post>
      <PostHeader data={data} />
      <PostBody 
        likeHandler={likeHandler} 
        isItLiked={isItLiked}
        data={data} 
      />
      <PostFooter 
        likeHandler={likeHandler} 
        isItLiked={isItLiked}
        data={data} 
      />
    </S.Post>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.object.isRequired
};