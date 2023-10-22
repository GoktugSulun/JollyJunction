import React from 'react';
import PropTypes from 'prop-types';
import { PostImages } from '../../../../../assets/Pngs/Pngs';

const PostBody = ({ data }) => {
   const getImageURL = () => {
      return PostImages.find((path) => path.includes(data.files[0]));
   };

  return (
    <>
      <p className="description"> { data.description } </p>
      { !!data.files.length && <img loading="lazy" src={getImageURL()} alt="post-content" /> }
    </>
  );
};

export default PostBody;

PostBody.propTypes = {
   data: PropTypes.object.isRequired
};