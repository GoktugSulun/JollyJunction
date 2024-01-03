import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '../../../Core/Components/Buttons/Button.style';
import * as S from '../Style/Header.style';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    backgroundColor: '#2d2d2d',
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      color: '#c7c5c5',
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: '#c7c5c5',
        marginRight: theme.spacing(1.5),
        '& path': {
          fill: '#c7c5c5'
        },
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const UserMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const { authorizedUser } = useSelector((state) => state.AppConfig.init);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    handleClose();
    localStorage.clear();
    navigate('/login', { replace: true });
  };

  const navigateMyProfile = () => {
    handleClose();
    const targetURL = `/profile/${authorizedUser.name.split(' ').join('')}${authorizedUser.surname.split(' ').join('')}/${authorizedUser.id}`;
    if (pathname !== targetURL) {
      navigate(targetURL);
    }
  };

  const navigateSettings = () => {
    handleClose();
    if (pathname !== '/settings') {
      navigate('/settings');
    }
  };

  return (
    <S.MenuWrapper>
      <IconButton onClick={handleClick} className="menu-button">
        <MenuIcon />
      </IconButton>
      <Button
        className="profile-button"
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        bgColor="#2d2d2d"
        $color="#c7c5c5"
      >
        {`${authorizedUser?.name} ${authorizedUser?.surname}`}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={navigateMyProfile} disableRipple>
          <PersonIcon />
          Profile
        </MenuItem>
        <S.CustomDivider />
        <MenuItem onClick={navigateSettings} disableRipple>
          <SettingsIcon />
          Settings
        </MenuItem>
        <S.CustomDivider />
        <MenuItem onClick={logout} disableRipple>
          <LogoutIcon />
          Logout
        </MenuItem>
      </StyledMenu>
    </S.MenuWrapper>
  );
};

export default UserMenu;