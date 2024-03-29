import React from 'react';
import * as S from '../Style/UserProfile.style';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import PropTypes from 'prop-types';

const NoData = ({ message }) => {
  return (
    <S.NoData>
      <SearchOffIcon />
      <p> { message } </p>
    </S.NoData>
  );
};

export default NoData;

NoData.propTypes = {
  message: PropTypes.string.isRequired
};