import React, { useEffect, useState } from 'react';
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

const CommentsSettings = ({ data, commentIdsState }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [commentIds, setCommentIds] = commentIdsState;
  const open = Boolean(anchorEl);
  const { loading, postData } = useSelector((state) => state.PostModal);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteHandler = () => {
    const payload = { 
      id: data.id, 
      post_id: postData.id, 
      clearCommentIdsFunc: () => setCommentIds((prevValues) => prevValues.filter((id) => id !== data.id)) 
    };
    setCommentIds((prevValues) => ([...prevValues, data.id]));
    dispatch(PostModalSagaActions.deleteComment(payload));
  };

  useEffect(() => {
    console.log(commentIds, ' commentIds');
  }, [commentIds]);

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
          onClick={handleClose}
          disabled={commentIds.includes(data.id)}
        > 
          <EditIcon /> Edit 
        </MenuItem>
        <MenuItem 
          disableRipple 
          className="delete" 
          onClick={deleteHandler}
          disabled={commentIds.includes(data.id)}
        > 
          {commentIds.includes(data.id) ? <Loading color="white" size={18} /> : <DeleteIcon />} Delete
        </MenuItem>
      </S.CommentSettingsMenu>
    </S.CommentsSettings>
  );
};

export default CommentsSettings;

CommentsSettings.propTypes = {
  data: PropTypes.object.isRequired,
  commentIdsState: PropTypes.array.isRequired
};