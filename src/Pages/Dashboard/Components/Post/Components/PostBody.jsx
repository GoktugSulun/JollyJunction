import React from 'react';
import PropTypes from 'prop-types';
import { PostImages } from '../../../../../assets/Pngs/Pngs';

const PostBody = ({ data, likeHandler, isItLiked }) => {
  const getImageURL = () => {
    return PostImages.find((path) => path.includes(data.files[0]));
  };

  const onDoubleClickHandler = () => {
    if (!isItLiked()) {
      likeHandler();
    }
  };

  return (
    <>
      <p className="description"> { data.description } </p>
      { !!data.files.length && <img onDoubleClick={onDoubleClickHandler} loading="lazy" src={getImageURL()} alt="post-content" /> }
    </>
  );
};

export default PostBody;

PostBody.propTypes = {
  data: PropTypes.object.isRequired,
  likeHandler: PropTypes.func.isRequired,
  isItLiked: PropTypes.func.isRequired,
};