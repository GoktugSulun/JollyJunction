import React from 'react';
import * as S from '../Style/PostModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { getUserImageURL } from '../../../assets/Pngs/Pngs';
import { IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import { PostModalActions } from '../Store/PostModal.slice';

const CommentsSectionHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postData } = useSelector((state) => state.PostModal); 

  const getUrl = () => {
    return `profile/${postData.user.name}${postData.user.surname}/${postData.user.id}`;
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
            onClick={() => navigate(getUrl())}
          >
            <img src={getUserImageURL(postData?.user?.img)} alt="user" />
          </Button>
          <div className="user__info">
            <Link className="user__name" to={getUrl()}> {postData?.user?.name} {postData?.user?.surname} </Link>
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