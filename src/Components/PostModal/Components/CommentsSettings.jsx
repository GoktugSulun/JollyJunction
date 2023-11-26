import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import * as S from '../Style/PostModal.style';

const CommentsSettings = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem disableRipple onClick={handleClose}> <EditIcon /> Edit </MenuItem>
        <MenuItem disableRipple className="delete" onClick={handleClose}> <DeleteIcon /> Delete </MenuItem>
      </S.CommentSettingsMenu>
    </S.CommentsSettings>
  );
};

export default CommentsSettings;