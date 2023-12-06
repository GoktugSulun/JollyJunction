import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import * as S from './Style/PostModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { PostModalActions } from './Store/PostModal.slice';
import { ModalTypes } from '../../Core/Constants/Enums';
import CommentsSection from './Components/CommentsSection';
import { PostModalSagaActions } from './Store/PostModal.saga';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import { DashboardSagaActions } from '../../Pages/Dashboard/Store/Dashboard.saga';
import { intersectionObserver } from '../../Core/Helpers';
import { getImage } from '../../Core/Utils/Image';

const PostModal = () => {
  const dispatch = useDispatch();
  const { isOpen, postData, limit, page, canBeMoreComment } = useSelector((state) => state.PostModal); 

  const handleClose = () => dispatch(PostModalActions.handleModal(ModalTypes.CLOSE));

  const fetchMoreComment = () => {
    if (canBeMoreComment) {
      dispatch(PostModalSagaActions.getComments({ post_id: postData.id, page, limit }));
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

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      const element = Array.from(document.querySelectorAll('.comment'))?.at(-1);
      intersectionObserver(element, fetchMoreComment);
    }
  }, PostModalSagaActions.getComments());

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
        <S.PostModal image={!!postData?.files?.length} isOpen={isOpen}>
          {
            postData?.files?.length
              && <S.Image>
                <img loading="lazy" src={getImage(postData.files?.[0])} alt="post" />
              </S.Image>
          }
          <CommentsSection />
        </S.PostModal>
      </Modal>
    </div>
  );
};

export default PostModal;