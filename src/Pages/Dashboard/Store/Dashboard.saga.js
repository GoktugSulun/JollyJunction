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
   createPost: createAction(`${mainSagaName}/createPost`)
};

export default [
   createSagaWatcher({
      actionType: DashboardSagaActions.getPosts.type,
      takeType: SagaTakeTypes.TAKE_LATEST,
      * func({ payload }) {
         const { page, limit } = payload;
         const response = yield call(request, HttpMethodTypes.GET, `${ApiUrl.posts}?_page=${page}&_limit=${limit}`);
         yield put(DashboardActions.setPosts(response?.data || []));
      }
   }),
   createSagaWatcher({
      actionType: DashboardSagaActions.createPost.type,
      takeType: SagaTakeTypes.TAKE_LATEST,
      * func({ payload }) {
         yield call(request, HttpMethodTypes.POST, `${ApiUrl.posts}`, payload);
         yield put(snackbar('Post is created successfully'));
      }
   })
];