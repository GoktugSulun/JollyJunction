import React from 'react';
import * as S from './UserProfile.styled';
import PropTypes from 'prop-types';
import LetterImage from '../LetterImage/LetterImage';
import { useLocation, useNavigate } from 'react-router-dom';

const UserProfile = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateHandler = () => {
    const targetUrl = `/profile/${props.name.split(' ').join('')}/${props.id}`;
    if (targetUrl !== location.pathname) {
      navigate(targetUrl);
    }
  };

  const event = props.clickable ? { onClick: navigateHandler } : {};

  return (
    <S.UserProfile 
      small={props.small} 
      justImage={!props.name.trim() && !props.position.trim()} 
      clickable={props.clickable}
      className={props.className}
    >
      {
        props.src
          ?  <img {...event} className="user-img" src={props.src} alt="user" />
          :  <LetterImage {...event} className="user-img" fontSize={props.fontSize} name={props.name} />
      }
      {
        props.displayName
          && <div className="user-info">
            <div {...event} className="user-info__name"> {props.name} </div>
            <div className="user-info__position"> {props.position} </div>
          </div>
      }
    </S.UserProfile>
  );
};

export default UserProfile;

const validateId = (props, propName, componentName) => {
  const id = props[propName];
  const clickable = props.clickable;

  if (clickable && id === undefined) {
    return new Error(`The prop '${propName}' is required when 'clickable' is set to true in ${componentName}.`);
  }

  return null;
};

UserProfile.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  small: PropTypes.bool,
  fontSize: PropTypes.string,
  displayName: PropTypes.bool,
  clickable: PropTypes.bool,
  id: validateId,
  className: PropTypes.string
};

UserProfile.defaultProps = {
  src: '',
  name: '',
  position: '',
  small: false,
  fontSize: '35px',
  clickable: true,
  displayName: true,
  className: ''
};