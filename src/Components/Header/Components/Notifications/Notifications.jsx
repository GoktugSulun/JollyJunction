import * as React from 'react';
import * as S from '../../Style/Header.style';
import { IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsContent from './NotificationsContent';

const menuProps = {
  elevation: 0,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  id: 'demo-customized-menu',
  MenuListProps: {
    'aria-labelledby': 'demo-customized-button',
  }
};

const Notications = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <S.NoticationsMenuWrapper>
      <IconButton onClick={handleClick}>
        <NotificationsIcon />
      </IconButton>
      <S.StyledMenu
        {...menuProps}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <NotificationsContent />
      </S.StyledMenu>
    </S.NoticationsMenuWrapper>
  );
};

export default Notications;