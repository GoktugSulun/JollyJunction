import React from 'react';
import * as S from '../Style/UserProfile.styled';
import SearchOffIcon from '@mui/icons-material/SearchOff';

const NoData = () => {
  return (
    <S.NoData>
      <SearchOffIcon />
      <p> This user didnt post yet. </p>
    </S.NoData>
  );
};

export default NoData;