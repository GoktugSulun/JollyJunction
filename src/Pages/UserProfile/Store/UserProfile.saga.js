import { call, put } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helpers/createSagaWatcher';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';
import { UserProfileActions } from './UserProfile.slice';

const mainSagaName = 'UserProfile/request';

export const UserProfileSagaActions = {
  getUserById: createAction(`${mainSagaName}/getUserById`),
};

export default [
  createSagaWatcher({
    actionType: UserProfileSagaActions.getUserById.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { user_id } = payload;
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.getUserById}/${user_id}`);
      yield put(UserProfileActions.setUser(response?.data || {}));
    }
  })
];