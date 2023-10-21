import React, { useState } from 'react';
import * as S from './Style/Register.style';
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
import Loading from '../../Core/Components/Loading/Loading';
import { RegisterSagaActions } from './Store/Register.saga';
import useHttpResponse from '../../Core/Hooks/useHttpResponse';

const schema = yup.object({
  name: yup.string().required('Required!').min(2, 'Name must be at least 2 character'),
  surname: yup.string().required('Required!').min(2, 'Name must be at least 2 character'),
  email: yup.string().email('Invalid email format!').required('Required!'),
  password: yup.string().required('Required!').test('password match', 'Passwords does not match!', (value, context) => value === context.parent.rpassword),
  rpassword: yup.string().required('Required!').test('password match', 'Passwords does not match!', (value, context) => value === context.parent.password),
});

const defaultValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  rpassword: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.Register);
  const [isClickedSignUp, setIsClickedSignUp] = useState(false);
  const { registerHandler, form } = useMaterialForm({
    defaultValues,
    schema
  });

  const onSignUp = (data) => {
    const payload = { ...data };
    delete payload.rpassword;
    dispatch(RegisterSagaActions.register(payload));
  };

  const onError = (error) => {
    const emptyEntry = Object.entries(error).find(([, value]) => value.type === 'required');
    if (emptyEntry?.length) {
      dispatch(snackbar('Boş alan bırakılamaz!', { variant: NotifierTypes.ERROR }));
    } else {
      dispatch(snackbar(`${Object.values(error)[0].message}`, { variant: NotifierTypes.ERROR }));
    }
  };

  const signUpHandler = () => {
    setIsClickedSignUp(true);
    form.handleSubmit(onSignUp, onError)();
  };
  
  useHttpResponse({
    success: ({ idleAction }) => {
      dispatch(snackbar('Kayıt işlemi başarılı, giriş yapabilirsiniz.'));
      idleAction();
      navigate('/login');
    }
  }, RegisterSagaActions.register());

  return (
    <S.Register>
      <div className="container">
        <div className="sign-up">
          <h1 className="sign-up__title"> Sign Up </h1>
          <div className="sign-up__icons">
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
          <div className="sign-up__horizontal-line">
            <div className="sign-up__or"> or </div>
          </div>
          <div className="sign-up__fullname">
            <TextInput
              fullWidth
              label="Name"
              {...registerHandler('name')}
            />
            <TextInput
              fullWidth
              label="Surname"
              {...registerHandler('surname')}
            />
          </div>
          <TextInput
            label="Email"
            {...registerHandler('email')}
          />
          <TextInput
            label="Password"
            {...registerHandler('password')}
            onChange={async () => {
              if (isClickedSignUp) {
                await form.trigger('rpassword');
              }
            }}
          />
          <TextInput
            label="R-Password"
            {...registerHandler('rpassword')}
            onChange={async () => {
              if (isClickedSignUp) {
                await form.trigger('password');
              }
            }}
          />
          <Button 
            className="sign-up__button"
            onClick={signUpHandler}
          > 
            { loading?.register ? <Loading size={30} color="#FFFFFF" /> : 'Sign up' } 
          </Button>
          <p className="sign-up__sign-in"> Do you have already an account ? <Link to="/login"> Click here </Link> to sign in. </p>
        </div>
      </div>
    </S.Register>
  );
};

export default Register;