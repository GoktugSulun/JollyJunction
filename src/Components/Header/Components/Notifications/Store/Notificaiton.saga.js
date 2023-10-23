import { call, put } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../../../Core/Helper/createSagaWatcher';
import { HttpMethodTypes, SagaTakeTypes } from '../../../../../Core/Constants/Enums';
import { request } from '../../../../../Core/Request/Request';
import { ApiUrl } from '../../../../../Core/Constants/ApiUrl';
import { NotificationActions } from './Notification.slice';

const mainSagaName = 'Notification/request';

export const NotificationSagaActions = {
   updateSeenNotification: createAction(`${mainSagaName}/updateSeenNotification`),
   getNotifications: createAction(`${mainSagaName}/getNotifications`),
   getUnreadNotifications: createAction(`${mainSagaName}/getUnreadNotifications`),
};

export default [
   createSagaWatcher({
      actionType: NotificationSagaActions.getNotifications.type,
      takeType: SagaTakeTypes.TAKE_LATEST,
      * func({ payload }) {
         const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.notifications}?receiver_user.id=${payload}`);
         yield put(NotificationActions.setNotifications(response?.data || []));
      }
   }),
   createSagaWatcher({
      actionType: NotificationSagaActions.getUnreadNotifications.type,
      takeType: SagaTakeTypes.TAKE_LATEST,
      * func({ payload }) {
         const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.notifications}?receiver_user.id=${payload}&read=false`);
         yield put(NotificationActions.setNotifications(response?.data || []));
      }
   }),
   createSagaWatcher({
      actionType: NotificationSagaActions.updateSeenNotification.type,
      takeType: SagaTakeTypes.TAKE_LATEST,
      * func({ payload }) {
         yield call(request, HttpMethodTypes.PATCH, `${ApiUrl.notifications}/${payload.notification_id}`, payload.data);
      }
   })
];