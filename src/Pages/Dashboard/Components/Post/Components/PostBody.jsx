import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { PostModalActions } from '../../../../../Components/PostModal/Store/PostModal.slice';
import { ModalTypes } from '../../../../../Core/Constants/Enums';

const importImage = async (name, type, callback) => {
  try {
    const response = await import(`../../../../../server/files/${name}.${type}`);
    callback(response.default);
  } catch (error) {
    console.log(error, ' err');
  }
};

const PostBody = ({ data, likeHandler }) => {
  const dispatch = useDispatch();
  const clickTimeout = useRef(null);
  const [imageURL, setImageURL] = useState('');

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

  useEffect(() => {
    if (Object.keys(data).length) {
      if (data.files.length) {
        const file = data.files[0];
        importImage(file.name, file.type, (res) => { setImageURL(res); });
      }
    }
  }, [data]);

  useEffect(() => {
    console.log(imageURL, ' imageURL');
  }, [imageURL]);

  return (
    <>
      <p className="description"> { data.description } </p>
      { !!data.files.length && <img onClick={onClickHandler} loading="lazy" src={imageURL} alt="post-content" /> }
    </>
  );
};

export default PostBody;

PostBody.propTypes = {
  data: PropTypes.object.isRequired,
  likeHandler: PropTypes.func.isRequired,
};