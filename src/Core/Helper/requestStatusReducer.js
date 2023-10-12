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
            if (action.payload) {
               // state.actionPayload[getActionType(action)] = 'deneme';
            } else {
               state.actionPayload = {};
            }
         }
      )
      //* check action type and repsonse type, and then set the loading, request status values. (SliceName/request/ActionType/HttpResponseType)
      .addMatcher(
         (action) => isMatchedSliceAndRequestAction(action, HttpResponseTypes.IDLE),
         (state, action) => {
            state.loading[getActionType(action)] = false;
            state.requestStatus[getActionType(action)] = HttpResponseTypes.IDLE;
            // state.actionPayload[getActionType(action)] = null;
         }
      )
      .addMatcher(
         (action) => isMatchedSliceAndRequestAction(action, HttpResponseTypes.LOADING),
         (state, action) => {
            state.loading[getActionType(action)] = true;
            state.requestStatus[getActionType(action)] = HttpResponseTypes.LOADING;
         }
      )
      .addMatcher(
         (action) => isMatchedSliceAndRequestAction(action, HttpResponseTypes.SUCCESS),
         (state, action) => {
            state.loading[getActionType(action)] = false;
            state.requestStatus[getActionType(action)] = HttpResponseTypes.SUCCESS;
         }
      )
      .addMatcher(
         (action) => isMatchedSliceAndRequestAction(action, HttpResponseTypes.FAILURE),
         (state, action) => {
            state.loading[getActionType(action)] = false;
            state.requestStatus[getActionType(action)] = HttpResponseTypes.FAILURE;
         }
      );
};

export default requestStatusReducer;