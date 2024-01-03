import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import * as S from '../../../Style/Dashboard.style';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { DashboardSagaActions } from '../../../Store/Dashboard.saga';
import { DashboardActions } from '../../../Store/Dashboard.slice';

const menuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  id: 'post-settings-menu',
  MenuListProps: {
    'aria-labelledby': 'post-settings-button',
  }
};

const PostSettings = ({ id }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteHandler = () => {
    dispatch(DashboardSagaActions.deletePost({ id }));
    handleClose();
  };

  return (
    <div>
      <S.PostSettingsIconButton 
        id="post-settings-button"
        aria-controls={open ? 'post-settings-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </S.PostSettingsIconButton>
      <S.PostSettings
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        {...menuProps}
      >
        <MenuItem className="delete" onClick={deleteHandler}> 
          <DeleteIcon /> Delete 
        </MenuItem>
      </S.PostSettings>
    </div>
  );
};

export default PostSettings;

PostSettings.propTypes = {
  id: PropTypes
};