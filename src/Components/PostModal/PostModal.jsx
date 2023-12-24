import React, { useEffect, useRef } from 'react';
import Modal from '@mui/material/Modal';
import * as S from './Style/PostModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { PostModalActions } from './Store/PostModal.slice';
import CommentsSection from './Components/CommentsSection';
import { PostModalSagaActions } from './Store/PostModal.saga';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';
import { DashboardSagaActions } from '../../Pages/Dashboard/Store/Dashboard.saga';
import { getFileURL } from '../../Core/Utils/File';
import { getFileType } from '../../Core/Utils/FileType';
import FileTypeEnums from '../../Pages/Dashboard/Components/Enums/FileTypeEnums';
import Image from '../../Pages/Dashboard/Components/Post/Components/Image';
import Video from './Components/Video';
import { DashboardActions } from '../../Pages/Dashboard/Store/Dashboard.slice';
import { useMediaQuery } from '@mui/material';

const PostModal = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const { isOpen, postData, limit, videoData } = useSelector((state) => state.PostModal); 
  const min900px = useMediaQuery('(min-width: 900px)');

  const handleClose = () => {
    const payload = videoRef.current 
      ? { isLegal: true, currentTime: videoRef.current.currentTime, isPlaying: !videoRef.current.paused }
      : { isLegal: true, ...videoData };
    dispatch(DashboardActions.setVideoData(payload));
    dispatch(PostModalActions.setReset());
  };

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
    [FileTypeEnums.VIDEO]: <Video videoRef={videoRef} />
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
    }
  }, [isOpen]);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <S.PostModal file={!!postData?.files?.length} isOpen={isOpen}>
          { postData?.files?.length && min900px && <S.File> {fileElement[fileType]} </S.File> }
          <CommentsSection handleClose={handleClose} />
        </S.PostModal>
      </Modal>
    </div>
  );
};

export default PostModal;