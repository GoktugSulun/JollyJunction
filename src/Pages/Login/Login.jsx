import React, { useEffect, useState } from 'react';
import * as S from './Style/Login.style';
import { TextInput } from '../../Core/Inputs';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { useMaterialForm } from '../../Core/Hooks';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { snackbar } from '../../Core/Utils/Snackbar';
import { NotifierTypes } from '../../Core/Constants/Enums';

const user = {
  email: 'goktug',
  password: '123'
};

const defaultValues = {
  email: '',
  password: ''
};

const schema = yup.object({
  email: yup.string().required('Required!').min(4, 'Min 4 character'),
  password: yup.string().required('Required!').min(3, 'Min 3 character'),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerHandler, form } = useMaterialForm({ defaultValues, schema });
  const [value, setValue] = useState(''); 

  useEffect(() => {
    console.log(value, ' val');
  }, [value]);

  const onSubmit = (data) => {
    if (data.email === user.email && data.password === user.password) {
      navigate('/');
      return;
    }
    dispatch(snackbar('Email ya da şifre yanlış!', { variant: NotifierTypes.ERROR }));
  };
  
  const onError = (errors) => {
    console.log(errors, ' errors');
    dispatch(snackbar('Gerekli inputları doldurunuz!', { variant: NotifierTypes.ERROR }));
  };

  const testHandler = () => {
    form.handleSubmit(onSubmit, onError)();
  };


  return (
    <S.Login>
      <TextInput 
        label="Email" 
        placeholder="Enter your business mail"
        {...registerHandler('email')}
        onChange={(value) => { console.log(value, ' value'); }}
        // palette={{ inputColor: 'orange' }}
        palette={{ inputColor: '#1976d2' }}
      />   
      <TextInput 
        label="Password" 
        placeholder="Enter your password"
        type="password"
        // control={control}
        // name="password"
        {...registerHandler('password')}
        // value={value}
        onChange={(_, val) => { console.log(val, ' val'); setValue(val); }}
      /> 
      <Button onClick={testHandler} variant='contained' > Test </Button>
    </S.Login>
  );
};

export default Login;