import * as React from 'react';
import Modal from '@mui/material/Modal';
import * as S from './Style/SettingsModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { AppConfigActions } from '../../Core/Store/AppConfig.slice';
import { ModalTypes } from '../../Core/Constants/Enums';
import { useHttpResponse } from '../../Core/Hooks';
import { AppConfigSagaActions } from '../../Core/Store/AppConfig.saga';
import _ from 'lodash';
import { Checkbox, FormControlLabel, IconButton } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '../Divider/Divider.style';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../Core/Components/Buttons/Button.style';
import Loading from '../../Core/Components/Loading/Loading';
import { snackbar } from '../../Core/Utils/Snackbar';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#222',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#222',
    color: '#c9c9c9',
    textIndent: '5px',
    lineHeight: '16px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
  },
}));

const SettingsModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpenSettingsModal, init: { missingProfile }, loading } = useSelector((state) => state.AppConfig);

  const handleClose = () => {
    dispatch(AppConfigActions.handleSettingsModal(ModalTypes.CLOSE));
  };

  const navigateToSettings = () => {
    handleClose();
    if (location.pathname !== '/settings') {
      navigate('/settings');
    }
  };

  const remindMeLater = () => {
    dispatch(snackbar('We will remind you later for profile customization'));
    handleClose();
  };

  const handleCheckbox = (e) => {
    const payload = { dont_show_again: e.target.checked };
    dispatch(AppConfigSagaActions.patchUser(payload));
  };

  const getIcon = (key) => {
    switch (key) {
    case 'img':
      return <PersonIcon />;
    case 'position':
      return <WorkIcon />;
    case 'city':
      return <LocationOnIcon />;
    case 'school':
      return <SchoolIcon />;
    default:
      return null;
    }
  };

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      if (!_.isEmpty(missingProfile)) {
        dispatch(AppConfigActions.handleSettingsModal(ModalTypes.OPEN));
      }
    }
  }, AppConfigSagaActions.getInit());

  return (
    <div>
      <Modal
        open={isOpenSettingsModal}
      >
        <S.SettingsModal>
          <div className="hidden-wrapper">
            <S.SettingsModalContent>
              <div className="header">
                <h2 className="title"> Hello JollyJunction member! </h2>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </div>
              <p className="description"> 
            &nbsp;&nbsp;Welcome to the world of social media! We are here to meet you better and make your <b>JollyJunction</b> experience more personal.
              </p>
              <p className="description">
            &nbsp;&nbsp;Can you spare a few minutes to make your profile richer and more attractive? These small steps will connect you with other users with similar interests and further strengthen the <b>JollyJunction</b> community.
              </p>
              <Divider />
              <h2 className="missing-infos-title"> <b>Last {Object.keys(missingProfile).length} step</b> to customize your profile! </h2>
              <div className="missing-infos">
                {
                  Object.entries(missingProfile).map(([key, value]) => (
                    <CustomTooltip key={key} title={`${value.description}`}>
                      <button onClick={navigateToSettings} className="info">
                        { getIcon(key) }
                        <h4 className="info__title"> {value.title} </h4>
                      </button>
                    </CustomTooltip>
                  ))
                }
              </div>
              <Divider />
              <div className="footer">
                <FormControlLabel 
                  onChange={handleCheckbox}
                  control={<Checkbox 
                    {...(loading?.patchUser ? { icon: <Loading size={20} /> } : {})} 
                    {...(loading?.patchUser ? { checkedIcon: <Loading size={20} /> } : {})} 
                  />} 
                  disabled={loading?.patchUser} 
                  label="Do not show this warning again" 
                />
                <div className="button-group">
                  <Button onClick={remindMeLater} className="remind-me-later">
                    Remind me later
                  </Button>
                  <Button onClick={navigateToSettings}>
                    Customize now
                  </Button>
                </div>
              </div>
            </S.SettingsModalContent>
          </div>
        </S.SettingsModal>
      </Modal>
    </div>
  );
};

export default SettingsModal;