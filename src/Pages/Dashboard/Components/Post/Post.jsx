import React from 'react';
import * as S from '../../Style/Dashboard.style';
import PropTypes from 'prop-types';
import PostHeader from './Components/PostHeader';
import PostBody from './Components/PostBody';
import PostFooter from './Components/PostFooter';

const Post = ({ data }) => {

   return (
    <S.Post>
      <PostHeader data={data} />
      <PostBody data={data} />
      <PostFooter data={data} />
    </S.Post>
  );
};

export default Post;

Post.propTypes = {
   data: PropTypes.object.isRequired
};