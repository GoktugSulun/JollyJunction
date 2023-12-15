import React, { useEffect, useRef } from 'react';
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
import Image from '../../Pages/Dashboard/Components/Post/Components/Image';
import Video from './Components/Video';

const PostModal = () => {
  const dispatch = useDispatch();
  const { isOpen, postData, limit } = useSelector((state) => state.PostModal); 

  const handleClose = () => dispatch(PostModalActions.handleModal(ModalTypes.CLOSE));

  const likeHandler = () => {
    const payload = {
      like: !postData.liked,
      post_id: postData.id
    };
    dispatch(DashboardSagaActions.likePost(payload));
  };

  const src = getFileURL(postData?.files?.[0]);
  const fileType = getFileType(postData?.files?.[0]?.type);
  const fileElement = {
    [FileTypeEnums.IMAGE]: <Image data={postData} likeHandler={likeHandler} src={src} />,
    [FileTypeEnums.VIDEO]: <Video />
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
      dispatch(PostModalActions.setReset()); // TODO: bunu düzelt olmaz böyle
    }
  }, [isOpen]);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <S.PostModal file={!!postData?.files?.length} isOpen={isOpen}>
          { postData?.files?.length && <S.File> {fileElement[fileType]} </S.File> }
          <CommentsSection />
        </S.PostModal>
      </Modal>
    </div>
  );
};

export default PostModal;