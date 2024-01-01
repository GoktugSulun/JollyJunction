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
<<<<<<< HEAD
=======
import { LoginSagaActions } from './Store/Login.saga';
import Loading from '../../Core/Components/Loading/Loading';
>>>>>>> 0452f2104a19d0a98bf9eeeece832c5cb872d4bf

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

<<<<<<< HEAD
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
=======
  const capitiliaze = (str) => (`${str[0].toUpperCase()}${str.slice(1)}`);

  const onError = (error) => {
    const emptyEntry = Object.entries(error).find(([, value]) => value.type === 'required');
    if (emptyEntry?.length) {
      dispatch(snackbar(`${capitiliaze(emptyEntry[0])} cannot be empty!`, { variant: NotifierTypes.ERROR }));
    } else {
      dispatch(snackbar(`${Object.values(error)[0].message}`, { variant: NotifierTypes.ERROR }));
    }
  };

  const signInHandler = () => {
    form.handleSubmit(onSignIn, onError)();
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      signInHandler();
    }
  };

  return (
    <S.Login>
      <div className="container">
        <div className="sign-in">
          <h1 className="sign-in__title"> Sign In </h1>
          <div className="sign-in__icons">
            <Tooltip title="Google"> 
              <IconButton> 
                <Google /> 
              </IconButton> 
            </Tooltip>
            <Tooltip title="Facebook"> 
              <IconButton> 
                <Facebook /> 
              </IconButton> 
            </Tooltip>
            <Tooltip title="Github"> 
              <IconButton> 
                <GitHub /> 
              </IconButton> 
            </Tooltip>
            <Tooltip title="LinkedIn"> 
              <IconButton> 
                <LinkedIn /> 
              </IconButton> 
            </Tooltip>
          </div>
          <div className="sign-in__horizontal-line">
            <div className="sign-in__or"> or </div>
          </div>
          <TextInput
            label="Email"
            {...registerHandler('email')}
            onKeyDown={onKeyDownHandler}
          />
          <TextInput
            label="Password"
            {...registerHandler('password')}
            type="password"
            onKeyDown={onKeyDownHandler}
          />
          <a className="sign-in__forgot-password"> Forgot your password ? </a>
          <Button 
            className="sign-in__button"
            onClick={signInHandler}
          > 
            { loading?.login ? <Loading size={30} color="#FFFFFF" /> : 'Sign in' } 
          </Button>
          <p className="sign-in__sign-up"> Don&apos;t you have an account ? <Link to="/register"> Click here </Link> to sign up. </p>
        </div>
        <div className="overlay">
          <h2 className="overlay__title"> Hello, Friend! </h2>
          <p className="overlay__description">
            Register with your personal details to share post, view other posts and interact with them by liking, commenting.
          </p>
          <Button 
            onClick={() => navigate('/register')} 
            className="overlay__button"
          > 
            Sign up 
          </Button>
        </div>
      </div>
>>>>>>> 0452f2104a19d0a98bf9eeeece832c5cb872d4bf
    </S.Login>
  );
};

export default Login;