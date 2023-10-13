import React from 'react';
import * as S from './LetterImage.style';
import PropTypes from 'prop-types';

const LetterImage = (props) => {
  return (
    <S.LetterImage>
      <span> {props.name?.[0] || '?'} </span>
    </S.LetterImage>
  );
};

export default LetterImage;

LetterImage.propTypes = {
   name: PropTypes.string
};

LetterImage.defaultProps = {
   name: '?'
};