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
  updateSeenNotification: createAction(`${mainSagaName}/updateSeenNotification`),
  getNotifications: createAction(`${mainSagaName}/getNotifications`),
  getUnreadNotifications: createAction(`${mainSagaName}/getUnreadNotifications`),
  acceptFriendshipRequest: createAction(`${mainSagaName}/acceptFriendshipRequest`),
  rejectFriendshipRequest: createAction(`${mainSagaName}/rejectFriendshipRequest`),
  markNotificationsSeen: createAction(`${mainSagaName}/markNotificationsSeen`),
  markNotificationsRead: createAction(`${mainSagaName}/markNotificationsRead`),
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
    actionType: NotificationSagaActions.getUnreadNotifications.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.notifications}?receiver_user.id=${payload}&read=false&is_removed=false`);
      yield put(NotificationActions.setNotifications(response?.data || []));
    }
  }),
  createSagaWatcher({
    actionType: NotificationSagaActions.updateSeenNotification.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      yield call(request, HttpMethodTypes.PATCH, `${ApiUrl.notifications}/${payload.notification_id}`, payload.data);
    }
  }),
  // createSagaWatcher({
  //   actionType: NotificationSagaActions.acceptFriendshipRequest.type,
  //   takeType: SagaTakeTypes.TAKE_EVERY,
  //   * func({ payload }) {
  //     yield call(request, HttpMethodTypes.PATCH, `${ApiUrl.users}/${payload.user_id}`, payload.newUserList);
  //     // yield call(request, HttpMethodTypes.PATCH, `${ApiUrl.users}/${payload.user_id}`, payload.newUserList);
  //     yield call(request, HttpMethodTypes.PATCH, `${ApiUrl.notifications}/${payload.notification_id}`, payload.dataForNotificationWillBeRemoved);
  //     yield call(request, HttpMethodTypes.POST, `${ApiUrl.notifications}`, payload.dataForSenderUser);
  //     const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.notifications}`, payload.dataForReceiverUser);
  //     yield put(snackbar('Friendship request is accepted'));
  //     yield put(NotificationActions.filterNotifications({ notification_id: payload.notification_id }));
  //     yield put(NotificationActions.unshiftNotification(response.data));
  //     yield put(LoginActions.updateUserFriends(payload.newUserList));
  //   }
  // }),
  createSagaWatcher({
    actionType: NotificationSagaActions.rejectFriendshipRequest.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      yield call(request, HttpMethodTypes.PATCH, `${ApiUrl.notifications}/${payload.notification_id}`, payload.data);
      yield put(snackbar('Friendship request is rejected'));
      yield put(NotificationActions.filterNotifications({ notification_id: payload.notification_id }));
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
  })
];