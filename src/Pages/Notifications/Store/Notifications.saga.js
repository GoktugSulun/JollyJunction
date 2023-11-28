import { call, put } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helpers/createSagaWatcher';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { request } from '../../../Core/Request/Request';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';
import { NotificationActions } from './Notifications.slice';
import { snackbar } from '../../../Core/Utils/Snackbar';
import { AppConfigActions } from '../../../Core/Store/AppConfig.slice';
import FriendshipEnums from '../../../server/constants/Enums/FriendshipEnums';
import { DashboardActions } from '../../Dashboard/Store/Dashboard.slice';

const mainSagaName = 'Notifications/request';

export const NotificationSagaActions = {
  getNotifications: createAction(`${mainSagaName}/getNotifications`),
  markNotificationsSeen: createAction(`${mainSagaName}/markNotificationsSeen`),
  markNotificationsRead: createAction(`${mainSagaName}/markNotificationsRead`),
  deleteNotifications: createAction(`${mainSagaName}/deleteNotifications`),
  friendship: createAction(`${mainSagaName}/friendship`),
  cancelFriendshipRequest: createAction(`${mainSagaName}/cancelFriendshipRequest`),
};

export default [
  createSagaWatcher({
    actionType: NotificationSagaActions.getNotifications.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.getNotifications}${payload.queries}`);
      yield put(NotificationActions.setNotifications(response?.data?.notifications || []));
      yield put(NotificationActions.setMore(response?.data?.more || false));
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
      yield put(NotificationActions.setTargetNotificationIds(payload.data.notification_ids));
      yield call(request, HttpMethodTypes.PUT, `${ApiUrl.markNotificationsRead}`, payload.data);
      yield put(NotificationActions.markNotificationsRead(payload.data));
      if (payload.snackbar) {
        yield put(snackbar('Marked as read'));
      }
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
  }),
  createSagaWatcher({
    actionType: NotificationSagaActions.friendship.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.friendship}`, payload);
      //* Remove target notification if it is accepted or rejected
      yield put(NotificationActions.filterNotifications({ notification_ids: [payload.notification_id] }));
      yield put(snackbar(response.message));
      if (payload.type === FriendshipEnums.ACCEPT) {
        yield put(NotificationActions.setNotification(response.data));
      }
    }
  }),
  createSagaWatcher({
    actionType: NotificationSagaActions.cancelFriendshipRequest.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { receiver_id } = payload;
      const response = yield call(request, HttpMethodTypes.PUT, `${ApiUrl.cancelFriendshipRequest}`, payload);
      yield put(snackbar(response.message));
      yield put(DashboardActions.editFriendAttribute({ receiver_id, canBeFriend: true }));
    }
  })
];