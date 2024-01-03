import { call, put } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helpers/createSagaWatcher';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';
import { snackbar } from '../../../Core/Utils/Snackbar';

const mainSagaName = 'Register/request';

export const RegisterSagaActions = {
  register: createAction(`${mainSagaName}/register`)
};

export default [
  createSagaWatcher({
    actionType: RegisterSagaActions.register.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const result = yield call(request, HttpMethodTypes.POST, ApiUrl.register, payload);
      yield put(snackbar(result.message));
    }
  })
];