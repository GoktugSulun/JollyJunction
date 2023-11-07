import { call, put } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helper/createSagaWatcher';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { request } from '../../../Core/Request/Request';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';
import { NotificationActions } from './Notifications.slice';
import { snackbar } from '../../../Core/Utils/Snackbar';
import { AppConfigActions } from '../../../Core/Store/AppConfig.slice';

const mainSagaName = 'Notifications/request';

export const NotificationSagaActions = {
  getNotifications: createAction(`${mainSagaName}/getNotifications`),
  markNotificationsSeen: createAction(`${mainSagaName}/markNotificationsSeen`),
  markNotificationsRead: createAction(`${mainSagaName}/markNotificationsRead`),
  deleteNotifications: createAction(`${mainSagaName}/deleteNotifications`),
};

export default [
  createSagaWatcher({
    actionType: NotificationSagaActions.getNotifications.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.getNotifications}${payload.queries}`);
      yield put(NotificationActions.setNotifications(response?.data || []));
    }
  }),
  createSagaWatcher({
    actionType: NotificationSagaActions.markNotificationsSeen.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      yield call(request, HttpMethodTypes.PUT, `${ApiUrl.markNotificationsSeen}`, payload);
      yield put(NotificationActions.markNotificationsSeen());
      yield put(AppConfigActions.setUnseenNotificationsCount(0));
    }
  }),
  createSagaWatcher({
    actionType: NotificationSagaActions.markNotificationsRead.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      yield put(NotificationActions.setTargetNotificationIds(payload.notification_ids));
      yield call(request, HttpMethodTypes.PUT, `${ApiUrl.markNotificationsRead}`, payload);
      yield put(snackbar('Marked as read'));
      yield put(NotificationActions.markNotificationsRead(payload));
    }
  }),
  createSagaWatcher({
    actionType: NotificationSagaActions.deleteNotifications.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      yield put(NotificationActions.setTargetRemovedNotificationIds(payload.notification_ids));
      yield call(request, HttpMethodTypes.DELETE, `${ApiUrl.deleteNotifications}`, payload);
      yield put(snackbar('Notifications is deleted'));
      yield put(NotificationActions.filterNotifications(payload));
    }
  })
];