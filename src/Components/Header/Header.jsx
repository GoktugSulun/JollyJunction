import React from 'react';
import * as S from './Style/Header.style';
import Search from './Components/Search';
import Tools from './Components/Tools';

const Header = () => {

  return (
    <S.Header>
      <Search />
      <Tools />
    </S.Header>
  );
};

export default Header;