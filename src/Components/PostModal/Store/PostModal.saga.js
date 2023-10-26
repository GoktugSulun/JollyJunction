import { call, put } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helper/createSagaWatcher';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';
import { PostModalActions } from './PostModal.slice';
import { snackbar } from '../../../Core/Utils/Snackbar';

const mainSagaName = 'PostModal/request';

export const PostModalSagaActions = {
  getSpecificPost: createAction(`${mainSagaName}/getSpecificPost`),
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
    actionType: PostModalSagaActions.createComment.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const response = yield call(request, HttpMethodTypes.POST, `${ApiUrl.comments}`, payload);
      const data = { comments: [response.data.id] };
      yield call(request, HttpMethodTypes.PATCH, `${ApiUrl.posts}/${payload.post_id}`, data);
      yield put(snackbar('Post is created'));
      yield put(PostModalActions.setComment(response));
    }
  })
];