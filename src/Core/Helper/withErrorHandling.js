import { call, put } from 'redux-saga/effects';
import requestStatusAction from './requestStatusAction';

const withErrorHandling = (func) => function* (action) {
   try {
      yield put(requestStatusAction.loading(action.type));
      yield call(func);
      yield put(requestStatusAction.success(action.type));
    } catch (e) {
      yield put(requestStatusAction.failure(action.type));
      //* e.message => snackbar ile göster
    }
};

export default withErrorHandling;