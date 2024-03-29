import React from 'react';
import * as S from '../Style/Header.style';
import * as yup from 'yup';
import TextInput from '../../../Core/Inputs/TextInput';
import useMaterialForm from '../../../Core/Hooks/useMaterialForm';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const defaultValues = {
  search: ''
};

const schema = yup.object({

});

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { registerHandler, form } = useMaterialForm({
    defaultValues,
    schema
  });

  return (
    <S.Search>
      <IconButton 
        className="title" 
        onClick={() => navigate('/', { replace: location.pathname === '/', state: location.pathname === '/' ? { refresh: Math.random() } : null })}
      > 
        JollyJunction
      </IconButton>
      {/* <TextInput
        {...registerHandler('search')}
        placeholder="Search..."
        endAdornment={<IconButton> <SearchIcon /> </IconButton>}
      /> */}
    </S.Search>
  );
};

export default Search;