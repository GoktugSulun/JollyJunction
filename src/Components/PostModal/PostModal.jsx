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

const importImage = async (name, type, callback) => {
  try {
    const response = await import(`../../server/files/${name}.${type}`);
    callback(response.default);
  } catch (error) {
    console.log(error, ' err');
  }
};

const PostModal = () => {
  const dispatch = useDispatch();
  const [imageURL, setImageURL] = useState('');
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
      if (postData.files.length) {
        const file = postData.files[0];
        importImage(file.name, file.type, (res) => { setImageURL(res); });
      }
    } else {
      setImageURL('');
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
                <img loading="lazy" src={imageURL} alt="post" />
              </S.Image>
          }
          <CommentsSection />
        </S.PostModal>
      </Modal>
    </div>
  );
};

export default PostModal;