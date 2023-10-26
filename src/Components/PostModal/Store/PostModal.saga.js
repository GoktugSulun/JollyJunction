import { call, put } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, NotifierTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helper/createSagaWatcher';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';
import { PostModalActions } from './PostModal.slice';

const mainSagaName = 'PostModal/request';

export const PostModalSagaActions = {
  getSpecificPost: createAction(`${mainSagaName}/getSpecificPost`)
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
  })
];