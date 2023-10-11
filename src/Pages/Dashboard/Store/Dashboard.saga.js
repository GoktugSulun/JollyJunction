import { call, put } from 'redux-saga/effects';
import { request } from '../../../Core/Request/Request';
import { HttpMethodTypes, SagaTakeTypes } from '../../../Core/Constants/Enums';
import { createAction } from '@reduxjs/toolkit';
import createSagaWatcher from '../../../Core/Helper/createSagaWatcher';
import { DashboardActions } from './Dashboard.slice';

const mainSagaName = 'Dashboard/request';

export const DashboardSagaActions = {
   getPosts: createAction(`${mainSagaName}/getPosts`),
   createPosts: createAction(`${mainSagaName}/createPosts`),
};

export default [
   createSagaWatcher({
    actionType: DashboardSagaActions.getPosts.type,
    takeType: SagaTakeTypes.TAKE_LATEST,
    *func () {
      const result = yield call(request, { method: HttpMethodTypes.GET, url: '/posts' });
      yield put(DashboardActions.setPosts(result.data));
    }
   })
];