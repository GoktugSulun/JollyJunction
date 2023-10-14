import React from 'react';
import * as S from './Style/Login.style';
import useMaterialForm from '../../Core/Hooks/useMaterialForm';
import * as yup from 'yup';
import { TextInput } from '../../Core/Inputs';
import { Button } from '../../Core/Components/Buttons/Button.style';
import { Facebook, GitHub, Google, LinkedIn } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { snackbar } from '../../Core/Utils/Snackbar';
import { NotifierTypes } from '../../Core/Constants/Enums';
import { LoginSagaActions } from './Store/Login.saga';
import Loading from '../../Core/Components/Loading/Loading';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';

const schema = yup.object({
  email: yup.string().email('Invalid email format!').required('Required!'),
  password: yup.string().required('Required!')
});

const defaultValues = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.Login);
  const { registerHandler, form } = useMaterialForm({
    defaultValues,
    schema
  });

  const onSignIn = (data) => {
    dispatch(LoginSagaActions.login(data));
  };

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

  useHttpResponse({
    success: ({ idleAction }) => {
      idleAction();
      navigate('/');
    }
  }, LoginSagaActions.login());

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
          />
          <TextInput
            label="Password"
            {...registerHandler('password')}
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
    </S.Login>
  );
};

export default Login;