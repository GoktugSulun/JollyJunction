import React from 'react';
import * as S from './UserProfile.style';
import PropTypes from 'prop-types';
import LetterImage from '../LetterImage/LetterImage';

const UserProfile = (props) => {
  return (
    <S.UserProfile>
      {
         props.src 
            ?  <img src={props.src} alt="user" />
            :  <LetterImage name={props.name} />
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
   position: PropTypes.string
};

UserProfile.defaultProps = {
   src: '',
   name: '',
   position: ''
};