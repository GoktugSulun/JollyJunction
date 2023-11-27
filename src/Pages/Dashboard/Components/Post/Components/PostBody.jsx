import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { PostImages } from '../../../../../assets/Pngs/Pngs';
import { useDispatch } from 'react-redux';
import { PostModalActions } from '../../../../../Components/PostModal/Store/PostModal.slice';
import { ModalTypes } from '../../../../../Core/Constants/Enums';

const PostBody = ({ data, likeHandler }) => {
  const dispatch = useDispatch();
  const clickTimeout = useRef(null);

  const getImageURL = () => {
    return PostImages.find((path) => path.includes(data.files[0]));
  };

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
    <>
      <p className="description"> { data.description } </p>
      { !!data.files.length && <img onClick={onClickHandler} loading="lazy" src={getImageURL()} alt="post-content" /> }
    </>
  );
};

export default PostBody;

PostBody.propTypes = {
  data: PropTypes.object.isRequired,
  likeHandler: PropTypes.func.isRequired,
};