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
   login: createAction(`${mainSagaName}/login`)
};

export default [
   createSagaWatcher({
      actionType: LoginSagaActions.login.type,
      takeType: SagaTakeTypes.TAKE_LATEST,
      * func({ payload }) {
         const result = yield call(request, HttpMethodTypes.GET, `${ApiUrl.users}?email=${payload.email}&password=${payload.password}`);
         if (!result.data.length) {
            yield put(snackbar('Email veya şifre yanlış!', { variant: NotifierTypes.ERROR }));
         } else {
            const user = { ...result.data[0] };
            delete user.password;
            yield put(LoginActions.setUser(user));
            localStorage.setItem('token', 'ABC123ABC123');
         }
      }
   })
];