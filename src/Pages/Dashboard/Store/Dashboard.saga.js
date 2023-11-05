import { call, put } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helper/createSagaWatcher';
import { DashboardActions } from './Dashboard.slice';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';
import { snackbar } from '../../../Core/Utils/Snackbar';

const mainSagaName = 'Dashboard/request';

export const DashboardSagaActions = {
  getPosts: createAction(`${mainSagaName}/getPosts`),
  createPost: createAction(`${mainSagaName}/createPost`),
  likePost: createAction(`${mainSagaName}/likePost`),
  savePost: createAction(`${mainSagaName}/savePost`),
  addFriend: createAction(`${mainSagaName}/addFriend`),
  removeFriend: createAction(`${mainSagaName}/removeFriend`),
  getNotificationsICreated: createAction(`${mainSagaName}/getNotificationsICreated`),
};

export default [
  createSagaWatcher({
    actionType: DashboardSagaActions.getPosts.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { page, limit } = payload;
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.getPosts}?page=${page}&limit=${limit}`);
      yield put(DashboardActions.setPosts(response?.data || []));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.createPost.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.createPost}`, payload);
      yield put(DashboardActions.setPost(response.data));
      yield put(snackbar('Post is created successfully'));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.likePost.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.likeUnlikePost}`, payload);
      yield put(snackbar(response.message));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.savePost.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.saveUnsavePost}`, payload);
      yield put(snackbar(response.message));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.addFriend.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      yield call(request, HttpMethodTypes.POST, `${ApiUrl.notifications}`, payload);
      yield put(snackbar('Friendship request are sent successfully'));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.getNotificationsICreated.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.notifications}?sender_user.id=${payload}&is_removed=false`);
      yield put(DashboardActions.setNotificationsICreated(response?.data || []));
    }
  })
];