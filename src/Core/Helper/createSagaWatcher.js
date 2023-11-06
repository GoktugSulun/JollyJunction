import { takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';
import { SagaTakeTypes } from '../Constants/Enums';
import withErrorHandling from './withErrorHandling';

const createSagaWatcher = ({ actionType, takeType, func }) => {
  console.log({ actionType, takeType, func });
  if ([actionType, takeType, func].some(i => !i)) {
    throw Error('createSagaWatcher: missing arguments.');
  }

  const sagaFunc = withErrorHandling(func);

  function* watcher() {
    switch (takeType) {
    case SagaTakeTypes.TAKE_LEADING:
      yield takeLeading(actionType, sagaFunc);
      break;
    case SagaTakeTypes.TAKE_LATEST:
      yield takeLatest(actionType, sagaFunc);
      break;
    case SagaTakeTypes.TAKE_EVERY:
      yield takeEvery(actionType, sagaFunc);
      break;
    default:
      throw Error('createSagaWatcher: undefined takeType argument.');
    }
  }

  return watcher();
};

export default createSagaWatcher;