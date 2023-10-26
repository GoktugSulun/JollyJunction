import React from 'react';
import * as S from './UserProfile.styled';
import PropTypes from 'prop-types';
import LetterImage from '../LetterImage/LetterImage';

const UserProfile = (props) => {
  return (
    <S.UserProfile small={props.small} justImage={!props.name.trim() && !props.position.trim()} >
      {
        props.src 
          ?  <img className="user-img" src={props.src} alt="user" />
          :  <LetterImage fontSize={props.fontSize} name={props.name} />
      }
      <div className="user-info">
        <div className="user-info__name"> {props.name} </div>
        <div className="user-info__position"> {props.position} </div>
      </div>
    </S.UserProfile>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  small: PropTypes.bool,
  fontSize: PropTypes.string
};

UserProfile.defaultProps = {
  src: '',
  name: '',
  position: '',
  small: false,
  fontSize: '35px'
};