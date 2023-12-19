import { call, put } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helpers/createSagaWatcher';
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
  acceptFriendship: createAction(`${mainSagaName}/acceptFriendship`),
  rejectFriendship: createAction(`${mainSagaName}/rejectFriendship`),
  getFriends: createAction(`${mainSagaName}/getFriends`),
  deleteFriend: createAction(`${mainSagaName}/deleteFriend`),
  deletePost: createAction(`${mainSagaName}/deletePost`),
};

export default [
  createSagaWatcher({
    actionType: DashboardSagaActions.getPosts.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { page, limit, user_id } = payload;
      const query = `?page=${page}&limit=${limit}${user_id ? `&user_id=${user_id}` : ''}&is_removed=false`;
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.getPosts}${query}`);
      yield put(DashboardActions.setPosts(response?.data || []));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.createPost.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.createPost}`, payload.data, payload.files);
      yield put(DashboardActions.setPost(response.data));
      yield put(snackbar('Post is created successfully'));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.likePost.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.likeUnlikePost}`, payload);
      yield put(DashboardActions.likePost(payload));
      yield put(snackbar(response.message));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.savePost.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.saveUnsavePost}`, payload);
      yield put(DashboardActions.savePost(payload));
      yield put(snackbar(response.message));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.addFriend.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { data: { receiver_id }, sender_id } = payload;
      const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.addFriend}`, payload.data);
      yield put(DashboardActions.editFriendAttribute({ receiver_id, canBeFriend: { sender_id } }));
      yield put(snackbar(response.message));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.acceptFriendship.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.PUT, `${ApiUrl.acceptFriendship}`, payload);
      yield put(DashboardActions.editFriendAttribute({ receiver_id: payload.sender_id, canBeFriend: false }));
      yield put(snackbar(response.message));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.rejectFriendship.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.PUT, `${ApiUrl.rejectFriendship}`, payload);
      yield put(DashboardActions.editFriendAttribute({ receiver_id: payload.sender_id, canBeFriend: true }));
      yield put(snackbar(response.message));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.getFriends.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { query } = payload;
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.getFriends}${query}`);
      yield put(DashboardActions.setFriends(response.data));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.deleteFriend.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { user_id, friend_id } = payload;
      const response = yield call(request, HttpMethodTypes.DELETE, `${ApiUrl.deleteFriend}?user_id=${user_id}&friend_id=${friend_id}`);
      yield put(snackbar(response.message));
      yield put(DashboardActions.filterFriends(payload));
      yield put(DashboardActions.editFriendAttribute({ receiver_id: friend_id, canBeFriend: true }));
    }
  }),
  createSagaWatcher({
    actionType: DashboardSagaActions.deletePost.type,
    takeType: SagaTakeTypes.TAKE_EVERY,
    * func({ payload }) {
      const { id } = payload;
      yield put(DashboardActions.setPostInProcess(id));
      const response = yield call(request, HttpMethodTypes.DELETE, `${ApiUrl.deletePost}/${id}`);
      yield put(snackbar(response.message));
      yield put(DashboardActions.deletePost(payload));
      yield put(DashboardActions.removePostInProcess(id));
    }
  })
];