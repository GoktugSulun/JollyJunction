import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import * as S from './Style/PostModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { PostModalActions } from './Store/PostModal.slice';
import { ModalTypes } from '../../Core/Constants/Enums';
import CommentsSection from './Components/CommentsSection';
import { PostModalSagaActions } from './Store/PostModal.saga';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import { DashboardSagaActions } from '../../Pages/Dashboard/Store/Dashboard.saga';
import { getFileURL } from '../../Core/Utils/File';
import { getFileType } from '../../Core/Utils/FileType';
import FileTypeEnums from '../../Pages/Dashboard/Components/Enums/FileTypeEnums';

const PostModal = () => {
  const dispatch = useDispatch();
  const { isOpen, postData, limit } = useSelector((state) => state.PostModal); 

  const handleClose = () => dispatch(PostModalActions.handleModal(ModalTypes.CLOSE));

  const getFileElement = () => {
    const fileType = getFileType(postData.files[0].type);
    switch (fileType) {
    case FileTypeEnums.IMAGE:
      return (
        <img 
          loading="lazy" 
          className="file file__image"
          src={getFileURL(postData.files?.[0])} 
          alt="post" 
        />
      );
    case FileTypeEnums.VIDEO:
      return (
        <video 
          key={getFileURL(postData.files[0])} 
          className="file file__video" 
          controls
          preload="metadata"
        >
          <source src={getFileURL(postData.files[0]) + '#t=0.5'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    default:
      throw new Error('Undefined video type: => ', fileType);
    }
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      if (isOpen) {
        dispatch(PostModalSagaActions.getSpecificPost({ post_id: postData.id }));
        idleAction();
      }
    }
  }, DashboardSagaActions.likePost());

  useHttpResponse({
    success: ({ idleAction }) => {
      if (isOpen) {
        dispatch(PostModalSagaActions.getSpecificPost({ post_id: postData.id }));
        idleAction();
      }
    }
  }, DashboardSagaActions.savePost());

  useEffect(() => {
    if (isOpen) {
      dispatch(PostModalSagaActions.getComments({ post_id: postData.id, page: 1, limit }));
    } else {
      dispatch(PostModalActions.setReset());
    }
  }, [isOpen]);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <S.PostModal file={!!postData?.files?.length} isOpen={isOpen}>
          { postData?.files?.length && <S.File> {getFileElement()} </S.File> }
          <CommentsSection />
        </S.PostModal>
      </Modal>
    </div>
  );
};

export default PostModal;