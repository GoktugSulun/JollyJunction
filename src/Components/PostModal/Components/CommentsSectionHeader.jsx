import React from 'react';
import * as S from '../Style/PostModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import { PostModalActions } from '../Store/PostModal.slice';
import { ModalTypes } from '../../../Core/Constants/Enums';
import { DashboardActions } from '../../../Pages/Dashboard/Store/Dashboard.slice';
import LetterImage from '../../LetterImage/LetterImage';
import { getFileURL } from '../../../Core/Utils/File';

const CommentsSectionHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { postData } = useSelector((state) => state.PostModal); 

  const navigateHandler = () => {
    const targetUrl = `profile/${postData.user.name.split(' ').join('')}${postData.user.surname}/${postData.user.id}`;
    if (location.pathname !== targetUrl) {
      dispatch(PostModalActions.handleModal(ModalTypes.CLOSE));
      dispatch(DashboardActions.setReset());
      navigate(targetUrl);
    }
  };

  const closeModalHandler = () => {
    dispatch(PostModalActions.setReset());
  };

  return (
    <S.CommentsSectionHeader>
      <div className="header">
        <div className="user">
          <Button
            bgColor="transparent"
            padding="0"
            minWidth="0"
            disableRipple
            onClick={navigateHandler}
          >
            { postData?.user?.img ? <img src={getFileURL(postData.user.img)} alt="user" /> : <LetterImage fontSize="30px" name={postData?.user?.name} />}
          </Button>
          <div className="user__info">
            <div className="user__name" onClick={navigateHandler}> {postData?.user?.name} {postData?.user?.surname} </div>
            <span className="user__position"> {postData?.user?.position} </span>
          </div>
        </div>
        <Tooltip title="Close">
          <IconButton onClick={closeModalHandler}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </div>
      <p className="description"> {postData?.description} </p>
    </S.CommentsSectionHeader>
  );
};

export default CommentsSectionHeader;