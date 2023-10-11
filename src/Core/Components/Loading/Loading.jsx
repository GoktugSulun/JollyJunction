import React from 'react';
import * as S from './Loading.style';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';

const Loading = ({ blur, size, color }) => {
  return (
   <S.Loading color={color} blur={blur}>
    <CircularProgress size={size} />
   </S.Loading>
  );
};

export default Loading;

Loading.propTypes = {
  blur: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
};

Loading.defaultProps = {
  blur: false,
  color: '#4A329A',
  size: 40
};