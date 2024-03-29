import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import Loading from '../../../../Core/Components/Loading/Loading';
import { useMediaQuery } from '@mui/material';

const options = {
  rootMargin: '100% 0px',
};

const optionsForLastElement = {
  threshold: 1
};

const Post = ({ data, isLastElement, fetchMorePost }) => {
  const dispatch = useDispatch();
  const max600px = useMediaQuery('(max-width: 600px)'); //* screen width <= 600px
  const [src, setSrc] = useState('');
  const [optionsForVideo, setOptionsForVideo] = useState({ rootMargin: '-150px 0px', threshold: 0.70 });
  const { postsInProcess } = useSelector((state) => state.Dashboard);
  const { isOpen: isOpenPostDetailModal } = useSelector((state) => state.PostModal);
  const { ref, isIntersecting } = useIntersectionObserver({ options });
  const { ref: lastElementRef, isIntersecting: isIntersectingLastElement } = useIntersectionObserver({ options: optionsForLastElement, triggerOnce: true });
  const { ref: videoRef, isIntersecting: isVideoIntersecting, intersectionRatio } = useIntersectionObserver({ options: optionsForVideo, dependencies: [src] });

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
    [FileTypeEnums.VIDEO]: <Video data={data} src={src} videoRef={videoRef} isVideoIntersecting={isVideoIntersecting} intersectionRatio={intersectionRatio} />
  };

  useEffect(() => {
    if (max600px) { //* screen width <= 600px
      setOptionsForVideo((prev) => ({ ...prev, threshold: 1 }));
    } else {
      setOptionsForVideo((prev) => ({ ...prev, threshold: 0.70 }));
    }
  }, [max600px]);

  useEffect(() => {
    if (isOpenPostDetailModal) {
      return;
    }
    if (isIntersecting) { 
      const postElement = ref.current;
      const mediaElementSrc = postElement.dataset.src;
      setSrc(mediaElementSrc);
    } else {
      setSrc('');
    }
  }, [isIntersecting, data, isOpenPostDetailModal]);

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
        if (isLastElement) {
          lastElementRef.current = el;
        }
      }}
    >
      <S.PostOverlay isDeleting={postsInProcess.includes(data.id)}>
        <Loading color="#FFFFFF" size={80} />
      </S.PostOverlay>
      <PostHeader data={data} />
      { data.description && <p className="description"> { data.description } </p> }
      { !!data.files.length && fileElement[fileType]}
      <PostFooter 
        likeHandler={likeHandler} 
        data={data} 
        {...(fileType === FileTypeEnums.VIDEO ? { videoRef } : {})}
      />
    </S.Post>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.object.isRequired,
  isLastElement: PropTypes.bool,
  fetchMorePost: PropTypes.func,
};

Post.defaultProps = {
  isLastElement: false,
  fetchMorePost: () => {}
};