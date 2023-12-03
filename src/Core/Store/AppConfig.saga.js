import { call, put } from 'redux-saga/effects';
import { HttpMethodTypes, SagaTakeTypes } from '../Constants/Enums';
import createSagaWatcher from '../Helpers/createSagaWatcher';
import { request } from '../Request/Request';
import { ApiUrl } from '../Constants/ApiUrl';
import { AppConfigActions } from './AppConfig.slice';
import { createAction } from '@reduxjs/toolkit';
import { snackbar } from '../Utils/Snackbar';

const mainSagaName = 'AppConfig/request';

export const AppConfigSagaActions = {
  getInit: createAction(`${mainSagaName}/getInit`),
  getUnseenNotifications: createAction(`${mainSagaName}/getUnseenNotifications`),
  editUser: createAction(`${mainSagaName}/editUser`)
};

export default [
  createSagaWatcher({
    actionType: AppConfigSagaActions.getInit.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func() {
      const response = yield call(request, HttpMethodTypes.GET, ApiUrl.getInit);
      yield put(AppConfigActions.setInit(response.data));
    }
  }),
  createSagaWatcher({
    actionType: AppConfigSagaActions.getUnseenNotifications.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { query } = payload;
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.getNotifications}${query}`);
      yield put(AppConfigActions.setUnseenNotificationsCount(response.data.notifications.length));
    }
  }),
  createSagaWatcher({
    actionType: AppConfigSagaActions.editUser.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { id, data } = payload;
      const response = yield call(request, HttpMethodTypes.PUT, `${ApiUrl.editUser}/${id}`, data);
      yield put(snackbar('Your informations is saved'));
      yield put(AppConfigActions.setUser(response.data));
    }
  })
];