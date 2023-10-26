import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import * as S from './Style/PostModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { PostModalActions } from './Store/PostModal.slice';
import { ModalTypes } from '../../Core/Constants/Enums';

const PostModal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.PostModal); 

  const handleClose = () => dispatch(PostModalActions.handleModal(ModalTypes.CLOSE));

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <S.PostModal>
            deneme
        </S.PostModal>
      </Modal>
    </div>
  );
};

export default PostModal;