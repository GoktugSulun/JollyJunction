import { call, put } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helpers/createSagaWatcher';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';
import { PostModalActions } from './PostModal.slice';
import { snackbar } from '../../../Core/Utils/Snackbar';
import { DashboardActions } from '../../../Pages/Dashboard/Store/Dashboard.slice';

const mainSagaName = 'PostModal/request';

export const PostModalSagaActions = {
  getSpecificPost: createAction(`${mainSagaName}/getSpecificPost`),
  getComments: createAction(`${mainSagaName}/getComments`),
  createComment: createAction(`${mainSagaName}/createComment`),
  likeComment: createAction(`${mainSagaName}/likeComment`),
  deleteComment: createAction(`${mainSagaName}/deleteComment`),
  editComment: createAction(`${mainSagaName}/editComment`),
};

export default [
  createSagaWatcher({
    actionType: PostModalSagaActions.getSpecificPost.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { post_id } = payload;
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.getPostById}/${post_id}`);
      yield put(PostModalActions.setPostData(response?.data || {}));
    }
  }), 
  createSagaWatcher({
    actionType: PostModalSagaActions.getComments.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { page, limit, post_id } = payload;
      const query = `?post_id=${post_id}&page=${page}&limit=${limit}&is_removed=false`;
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.getComments}${query}`);
      yield put(PostModalActions.setComments(response?.data || []));
    }
  }),
  createSagaWatcher({
    actionType: PostModalSagaActions.createComment.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.createComment}`, payload);
      yield put(PostModalActions.setComment(response.data));
      yield put(snackbar(response.message));
    }
  }),
  createSagaWatcher({
    actionType: PostModalSagaActions.likeComment.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.likeComment}`, payload);
      yield put(PostModalActions.likeComment({ id: payload.id, data: response.data }));
      yield put(snackbar(response.message));
    }
  }),
  createSagaWatcher({
    actionType: PostModalSagaActions.deleteComment.type,
    takeType: SagaTakeTypes.TAKE_EVERY,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.DELETE, `${ApiUrl.deleteComment}/${payload.id}`);
      yield put(PostModalActions.deleteComment({ id: payload.id }));
      yield put(DashboardActions.decreaseCommentCount({ post_id: payload.post_id }));
      yield put(snackbar(response.message));
      payload.clearCommentIdsFunc();
    }
  }),
  createSagaWatcher({
    actionType: PostModalSagaActions.editComment.type,
    takeType: SagaTakeTypes.TAKE_EVERY,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.PUT, `${ApiUrl.editComment}`, payload.data);
      yield put(PostModalActions.editComment(payload.data));
      yield put(snackbar(response.message));
      payload.resetHandler();
    }
  })
];