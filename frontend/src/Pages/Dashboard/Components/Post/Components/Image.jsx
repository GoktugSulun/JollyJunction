import React, { useRef } from 'react';
import { PostModalActions } from '../../../../../Components/PostModal/Store/PostModal.slice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CustomSkeleton } from '../../../../../Components/Skeletons/Style/Skeletons.style';
import { useNavigate } from 'react-router-dom';

const Image = ({ data, src, likeHandler, inPostModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickTimeout = useRef(null);

  const handleLike = () => {
    if (!data.liked) {
      likeHandler();
    }
  };

  const onClickHandler = () => {  
    clearTimeout(clickTimeout.current);
    if (clickTimeout.current) {
      handleLike();
      clickTimeout.current = null;
    } else {
      clickTimeout.current = setTimeout(() => {
        dispatch(PostModalActions.setPostData(data));
        clickTimeout.current = null;
        navigate(`post/${data.id}`);
      }, 300);
    }
  };

  if (!src) {
    return <CustomSkeleton animation="wave" variant="rounded" width="100%" height={300} />;
  }

  return (
    <img 
      {...(inPostModal ? { onDoubleClick: handleLike } : { onClick: onClickHandler })}
      loading="lazy" 
      className="file file__image"
      src={src} 
      alt="post-content" 
    />
  );
};

export default Image;

Image.propTypes = {
  data: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  likeHandler: PropTypes.func.isRequired,
  inPostModal: PropTypes.bool,
};

Image.defaultProps = {
  inPostModal: false
};