import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import * as S from '../Style/PostModal.style';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { PostModalSagaActions } from '../Store/PostModal.saga';
import Loading from '../../../Core/Components/Loading/Loading';
import CommentActionTypes from '../Enums/CommentActionTypes';

const CommentsSettings = ({ commentId, commentLoadingStates, startEditingHandler, isEditing }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [commentLoadingState, setCommentLoadingState] = commentLoadingStates;
  const open = Boolean(anchorEl);
  const { postData } = useSelector((state) => state.PostModal);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    const payload = { 
      id: commentId, 
      post_id: postData.id, 
      clearCommentIdsFunc: () => setCommentLoadingState((prevValues) => prevValues.filter((obj) => obj.id !== commentId)) 
    };
    setCommentLoadingState((prevValues) => ([...prevValues, { id: commentId, type: CommentActionTypes.DELETE }]));
    dispatch(PostModalSagaActions.deleteComment(payload));
  };

  const handleEdit = () => {
    startEditingHandler();
    handleClose();
  };

  return (
    <S.CommentsSettings>
      <IconButton
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="setting"
      >
        <MoreHorizIcon />
      </IconButton>
      <S.CommentSettingsMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem 
          disableRipple 
          onClick={handleEdit}
          disabled={!!commentLoadingState.find((obj) => obj.id === commentId && (obj.type === CommentActionTypes.EDIT || obj.type === CommentActionTypes.DELETE)) || isEditing}
        > 
          {commentLoadingState.find((obj) => obj.id === commentId && obj.type === CommentActionTypes.EDIT) 
            ? <Loading color="white" size={18} /> 
            : <EditIcon />} Edit
        </MenuItem>
        <MenuItem 
          disableRipple 
          className="delete" 
          onClick={handleDelete}
          disabled={!!commentLoadingState.find((obj) => obj.id === commentId && (obj.type === CommentActionTypes.EDIT || obj.type === CommentActionTypes.DELETE))}
        > 
          {commentLoadingState.find((obj) => obj.id === commentId && obj.type === CommentActionTypes.DELETE) 
            ? <Loading color="white" size={18} /> 
            : <DeleteIcon />} Delete
        </MenuItem>
      </S.CommentSettingsMenu>
    </S.CommentsSettings>
  );
};

export default CommentsSettings;

CommentsSettings.propTypes = {
  commentId: PropTypes.number.isRequired,
  commentLoadingStates: PropTypes.array.isRequired,
  startEditingHandler: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired
};