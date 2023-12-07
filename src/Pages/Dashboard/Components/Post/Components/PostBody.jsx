import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { PostModalActions } from '../../../../../Components/PostModal/Store/PostModal.slice';
import { ModalTypes } from '../../../../../Core/Constants/Enums';
import { getFileURL } from '../../../../../Core/Utils/File';
import { getFileType } from '../../../../../Core/Utils/FileType';
import FileTypeEnums from '../../Enums/FileTypeEnums';

const PostBody = ({ data, likeHandler }) => {
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

  const getFileElement = () => {
    const fileType = getFileType(data.files[0].type);
    switch (fileType) {
    case FileTypeEnums.IMAGE:
      return (
        <img 
          onClick={onClickHandler} 
          loading="lazy" 
          className="file file__image"
          src={getFileURL(data.files[0])} 
          alt="post-content" 
        />
      );
    case FileTypeEnums.VIDEO:
      return (
        <video 
          key={getFileURL(data.files[0])} 
          className="file file__video" 
          controls
          preload="metadata"
        >
          <source src={getFileURL(data.files[0]) + '#t=0.5'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    default:
      throw new Error('Undefined video type: => ', fileType);
    }
  };

  return (
    <>
      <p className="description"> { data.description } </p>
      { !!data.files.length && getFileElement()}
    </>
  );
};

export default PostBody;

PostBody.propTypes = {
  data: PropTypes.object.isRequired,
  likeHandler: PropTypes.func.isRequired,
};