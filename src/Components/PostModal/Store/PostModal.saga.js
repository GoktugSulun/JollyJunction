import { call, put } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helper/createSagaWatcher';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';
import { PostModalActions } from './PostModal.slice';
import { snackbar } from '../../../Core/Utils/Snackbar';
import { DashboardActions } from '../../../Pages/Dashboard/Store/Dashboard.slice';
import _ from 'lodash';

const mainSagaName = 'PostModal/request';

export const PostModalSagaActions = {
  getSpecificPost: createAction(`${mainSagaName}/getSpecificPost`),
  getComments: createAction(`${mainSagaName}/getComments`),
  createComment: createAction(`${mainSagaName}/createComment`),
};

export default [
  createSagaWatcher({
    actionType: PostModalSagaActions.getSpecificPost.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { post_id } = payload;
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.posts}/${post_id}`);
      yield put(PostModalActions.setPostData(response?.data || {}));
    }
  }), 
  createSagaWatcher({
    actionType: PostModalSagaActions.getComments.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { post_id } = payload;
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.comments}?post_id=${post_id}&is_removed=false`);
      yield put(PostModalActions.setComments(response?.data || []));
    }
  }),
  createSagaWatcher({
    actionType: PostModalSagaActions.createComment.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { data, currentComments, notificationData } = payload;
      const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.comments}`, data);
      yield call(request, HttpMethodTypes.PATCH, `${ApiUrl.posts}/${data.post_id}`, { comments: [...currentComments, response.data.id] });
      if (notificationData) {
        yield call(request, HttpMethodTypes.POST, ApiUrl.notifications, notificationData);
      }
      yield put(PostModalActions.setComment(response.data));
      yield put(DashboardActions.setComments({ post_id: data.post_id, data: [...currentComments, response.data.id] }));
      yield put(snackbar('Post is created'));
    }
  })
];