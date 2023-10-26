import { call, put } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helper/createSagaWatcher';
import { ApiUrl } from '../../../Core/Constants/ApiUrl';
import { UserProfileActions } from './UserProfile.slice';

const mainSagaName = 'UserProfile/request';

export const UserProfileSagaActions = {
  getPosts: createAction(`${mainSagaName}/getPosts`),
};

export default [
  createSagaWatcher({
    actionType: UserProfileSagaActions.getPosts.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    * func({ payload }) {
      const { page, limit, user_id } = payload;
      const query = `?_page=${page}&_limit=${limit}&user.id=${user_id}`;
      const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.posts}${query}`);
      yield put(UserProfileActions.setPosts(response?.data || []));
    }
  })
];