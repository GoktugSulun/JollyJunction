import { call, put } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, NotifierTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helper/createSagaWatcher';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';
import { snackbar } from '../../../Core/Utils/Snackbar';
import { LoginActions } from './Login.slice';

const mainSagaName = 'Login/request';

export const LoginSagaActions = {
  login: createAction(`${mainSagaName}/login`),
  getUser: createAction(`${mainSagaName}/getUser`),
};

export default [
  createSagaWatcher({
    actionType: LoginSagaActions.login.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const result = yield call(request, HttpMethodTypes.GET, `${ApiUrl.user}?email=${payload.email}&password=${payload.password}`);
      if (!result?.data?.length) {
        yield put(snackbar('Email or password are wrong!', { variant: NotifierTypes.ERROR }));
      } else {
        const user = { ...result.data[0] };
        delete user.password;
        yield put(LoginActions.setUser(user));
        localStorage.setItem('token', 'ABC123ABC123');
      }
    }
  }),
  createSagaWatcher({
    actionType: LoginSagaActions.getUser.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const result = yield call(request, HttpMethodTypes.GET, `${ApiUrl.getUserById}/${payload.user_id}`);
      console.log(result, ' result');
      // if (!result?.data?.id) {
      //   yield put(snackbar('Unauthorized!', { variant: NotifierTypes.ERROR }));
      //   localStorage.clear();
      //   window.location.href = '/login';
      // } else {
      //   const user = { ...result.data };
      //   delete user.password;
      //   yield put(LoginActions.setUser(user));
      // }
    }
  })
];