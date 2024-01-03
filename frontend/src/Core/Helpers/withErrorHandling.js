import { call, put } from 'redux-saga/effects';
import requestStatusAction from './requestStatusAction';
import { ResponseError } from '../Models/ResponseError.model';
import { snackbar } from '../Utils/Snackbar';
import { NotifierTypes } from '../Constants/Enums';

const withErrorHandling = (func) => function* (action) {
  try {
    yield put(requestStatusAction.loading(action.type));
    yield call(func, action);
    yield put(requestStatusAction.success(action.type));
  } catch (error) {
    // if (error instanceof ResponseError) {
    //   yield put(requestStatusAction.failure(action.type));
    //   yield put(snackbar('Sunucu ile bağlantı kesildi', { variant: NotifierTypes.ERROR }));
    // }
    // console.log('alo ? ', error);
    // yield put(snackbar(error?.message || 'ERROR', { variant: NotifierTypes.ERROR }));
    // console.log('hata => ', error);
    yield put(requestStatusAction.failure(action.type));
    yield put(snackbar(error?.message || 'Sunucu ile bağlantı kesildi', { variant: NotifierTypes.ERROR }));
  }
};

export default withErrorHandling;