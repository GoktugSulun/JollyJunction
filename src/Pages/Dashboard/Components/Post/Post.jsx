import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from '../../Style/Dashboard.style';
import PropTypes from 'prop-types';
import PostHeader from './Components/PostHeader';
import PostFooter from './Components/PostFooter';
import { DashboardSagaActions } from '../../Store/Dashboard.saga';
import { useIntersectionObserver } from '../../../../Hooks';
import { getFileURL } from '../../../../Core/Utils/File';
import { getFileType } from '../../../../Core/Utils/FileType';
import FileTypeEnums from '../Enums/FileTypeEnums';
import Image from './Components/Image';
import Video from './Components/Video';

const options = {
  root: null,
  rootMargin: '100% 0px',
  threshold: 0
};

const optionsForLastElement = {
  root: null,
  rootMargin: '0px',
  threshold: 1
};

const Post = ({ data, isLast, fetchMorePost }) => {
  const dispatch = useDispatch();
  const { ref, isIntersecting } = useIntersectionObserver({ options });
  const { ref: lastElementRef, isIntersecting: isIntersectingLastElement } = useIntersectionObserver({ options: optionsForLastElement, triggerOnce: true });
  const [src, setSrc] = useState('');

  const likeHandler = () => {
    const payload = {
      like: !data.liked,
      post_id: data.id
    };
    dispatch(DashboardSagaActions.likePost(payload));
  }; 
  
  const fileType = getFileType(data.files[0]?.type);
  const fileElement = {
    [FileTypeEnums.IMAGE]: <Image data={data} likeHandler={likeHandler} src={src} />,
    [FileTypeEnums.VIDEO]: <Video data={data} src={src} />
  };

  useEffect(() => {
    if (isIntersecting) { 
      const postElement = ref.current;
      const mediaElementSrc = postElement.dataset.src;
      setSrc(mediaElementSrc);
    } else {
      setSrc('');
    }
  }, [isIntersecting, data]);

  useEffect(() => {
    if (isIntersectingLastElement) {
      fetchMorePost();
    }
  }, [isIntersectingLastElement]);

  return (
    <S.Post
      {...(data.files.length ? { 'data-src': getFileURL(data.files[0]) } : {})} 
      ref={(el) => {
        if (data.files.length) {
          ref.current = el;
        }
        if (isLast) {
          lastElementRef.current = el;
        }
      }}
      className="post"
    >
      <PostHeader data={data} />
      { data.description && <p className="description"> { data.description } </p> }
      { !!data.files.length && fileElement[fileType]}
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
  isLast: PropTypes.bool,
  fetchMorePost: PropTypes.func,
};

Post.defaultProps = {
  isLast: false,
  fetchMorePost: () => {}
};