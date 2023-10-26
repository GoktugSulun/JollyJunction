import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import * as S from './Style/PostModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { PostModalActions } from './Store/PostModal.slice';
import { ModalTypes } from '../../Core/Constants/Enums';
import { getPostsImageURL } from '../../assets/Pngs/Pngs';
import CommentsSection from './Components/CommentsSection';

const PostModal = () => {
  const dispatch = useDispatch();
  const { isOpen, postData } = useSelector((state) => state.PostModal); 

  const handleClose = () => dispatch(PostModalActions.handleModal(ModalTypes.CLOSE));

  console.log(getPostsImageURL(postData?.files?.[0]), ' getPostsImageURL(data?.files?.[0]) => ', postData);

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