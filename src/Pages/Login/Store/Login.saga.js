import { call } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helpers/createSagaWatcher';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';

const mainSagaName = 'Login/request';

export const LoginSagaActions = {
  login: createAction(`${mainSagaName}/login`),
};

export default [
  createSagaWatcher({
    actionType: LoginSagaActions.login.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const result = yield call(request, HttpMethodTypes.POST, ApiUrl.login, payload);
      localStorage.setItem('token', result.data.token);
      window.location.href = '/';
    }
  })
];