import React from 'react';
import * as S from './LetterImage.style';
import PropTypes from 'prop-types';

const LetterImage = (props) => {
  return (
    <S.LetterImage fontSize={props.fontSize} >
      <span> {props.name?.[0]?.trim() || '?'} </span>
    </S.LetterImage>
  );
};

export default LetterImage;

LetterImage.propTypes = {
  name: PropTypes.string,
  fontSize: PropTypes.string,
  className: PropTypes.string
};

LetterImage.defaultProps = {
  name: '?',
  fontSize: '35px',
  className: ''
};