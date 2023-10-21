import { call } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helper/createSagaWatcher';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';

const mainSagaName = 'Register/request';

export const RegisterSagaActions = {
   register: createAction(`${mainSagaName}/register`)
};

export default [
   createSagaWatcher({
      actionType: RegisterSagaActions.register.type,
      takeType: SagaTakeTypes.TAKE_LATEST,
      * func({ payload }) {
         yield call(request, HttpMethodTypes.POST, ApiUrl.users, payload);
      }
   })
];