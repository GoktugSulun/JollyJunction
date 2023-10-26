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

  const navigateHandler = () => {
    navigate(`profile/${postData.user.name} ${postData.user.name}/${postData.id}`);
  };

  const closeModalHandler = () => {
    dispatch(PostModalActions.setReset());
  };

  return (
    <S.CommentsSectionHeader>
      <div className="header">
        <div className="header__user">
          <Tooltip title="View profile">
            <Button
              bgColor="transparent"
              padding="0"
            >
              <img src={getUserImageURL(postData?.user?.img)} alt="user" />
            </Button>
          </Tooltip>
          <Tooltip title="View profile">
            <Link to={navigateHandler}> {postData?.user?.name} {postData?.user?.surname} </Link>
          </Tooltip>
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