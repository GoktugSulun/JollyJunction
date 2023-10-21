import React from 'react';
import * as S from '../Style/Header.style';
import * as yup from 'yup';
import TextInput from '../../../Core/Inputs/TextInput';
import useMaterialForm from '../../../Core/Hooks/useMaterialForm';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

const defaultValues = {
  search: ''
};

const schema = yup.object({

});

const Search = () => {
  const { registerHandler, form } = useMaterialForm({
    defaultValues,
    schema
  });

  return (
    <S.Search>
      <h1 className="title"> Socialpedia </h1>
      {/* <TextInput
        {...registerHandler('search')}
        placeholder="Search..."
        endAdornment={<IconButton> <SearchIcon /> </IconButton>}
      /> */}
    </S.Search>
  );
};

export default Search;