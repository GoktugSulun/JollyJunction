import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import * as S from './Style/PostModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { PostModalActions } from './Store/PostModal.slice';
import { ModalTypes } from '../../Core/Constants/Enums';
import { getPostsImageURL } from '../../assets/Pngs/Pngs';
import CommentsSection from './Components/CommentsSection';
import { PostModalSagaActions } from './Store/PostModal.saga';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import { DashboardSagaActions } from '../../Pages/Dashboard/Store/Dashboard.saga';

const PostModal = () => {
  const dispatch = useDispatch();
  const { isOpen, postData } = useSelector((state) => state.PostModal); 

  const handleClose = () => dispatch(PostModalActions.handleModal(ModalTypes.CLOSE));

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
      // dispatch(PostModalSagaActions.getComments({ post_id: postData.id }));
    }
  }, [isOpen]);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <S.PostModal isOpen={isOpen}>
          {
            postData?.files?.length
              && <S.Image>
                <img src={getPostsImageURL(postData?.files?.[0])} alt="post" />
              </S.Image>
          }
          <CommentsSection />
        </S.PostModal>
      </Modal>
    </div>
  );
};

export default PostModal;