import { HttpResponseTypes } from '../Constants/Enums';

const requestStatusReducer = (builder, sagaActions) => {

  const isMatchedSliceAndRequestAction = (action, responseType = '') => {
    return Object.values(sagaActions)
      .some((sagaAction) => {
        const sagaActionType = `${sagaAction().type}${responseType ? `/${responseType}` : ''}`;
        return sagaActionType === action.type && action.type.includes('request');
      });
  };

  const getActionType = (action) => {
    //* action type format => (SliceName/request/ActionType/HttpResponseType)
    return action.type.split('/')[2];
  };

  const setResult = (state, action, loading, requestStatus) => {
    if (state?.loading) {
      state.loading[getActionType(action)] = loading;
    }
    if (state?.requestStatus) {
      state.requestStatus[getActionType(action)] = requestStatus;
    }
  };

  builder
  //* add loading and requestStatus objects in slice state if there is no when the request action is triggered firstly. (SliceName/request/ActionType)
    .addMatcher(
      (action) => isMatchedSliceAndRequestAction(action),
      (state, action) => {
        if (!state.loading) {
          state.loading = {};
        }
        if (!state.requestStatus) {
          state.requestStatus = {};
        }
        if (!state.actionPayload) {
          state.actionPayload = {};
        }
        if (action.payload) {
          state.actionPayload[getActionType(action)] = action.payload;
        }
      }
    )
  //* check action type and repsonse type, and then set the loading, request status values. (SliceName/request/ActionType/HttpResponseType)
    .addMatcher(
      (action) => isMatchedSliceAndRequestAction(action, HttpResponseTypes.IDLE),
      (state, action) => setResult(state, action, false, HttpResponseTypes.IDLE)
    )
    .addMatcher(
      (action) => isMatchedSliceAndRequestAction(action, HttpResponseTypes.LOADING),
      (state, action) => setResult(state, action, true, HttpResponseTypes.LOADING)
    )
    .addMatcher(
      (action) => isMatchedSliceAndRequestAction(action, HttpResponseTypes.SUCCESS),
      (state, action) => setResult(state, action, false, HttpResponseTypes.SUCCESS)
    )
    .addMatcher(
      (action) => isMatchedSliceAndRequestAction(action, HttpResponseTypes.FAILURE),
      (state, action) => setResult(state, action, false, HttpResponseTypes.FAILURE)
    );
};

export default requestStatusReducer;