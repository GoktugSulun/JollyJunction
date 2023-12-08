import React, { useRef } from 'react';
import { PostModalActions } from '../../../../../Components/PostModal/Store/PostModal.slice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ModalTypes } from '../../../../../Core/Constants/Enums';

const Image = ({ data, src, likeHandler }) => {
  const dispatch = useDispatch();
  const clickTimeout = useRef(null);

  const onClickHandler = () => {  
    clearTimeout(clickTimeout.current);
    if (clickTimeout.current) {
      if (!data.liked) {
        likeHandler();
      }
      clickTimeout.current = null;
    } else {
      clickTimeout.current = setTimeout(() => {
        dispatch(PostModalActions.setPostData(data));
        dispatch(PostModalActions.handleModal(ModalTypes.OPEN));
        clickTimeout.current = null;
      }, 300);
    }
  };

  return (
    <img 
      onClick={onClickHandler} 
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
};