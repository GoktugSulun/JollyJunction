import { HttpResponseTypes } from '../Constants/Enums';

const requestStatusAction = {
   idle: (actionType) => ({ type: actionType.concat('/', HttpResponseTypes.IDLE) }),
   loading: (actionType) => ({ type: actionType.concat('/', HttpResponseTypes.LOADING) }),
   success: (actionType) => ({ type: actionType.concat('/', HttpResponseTypes.SUCCESS) }),
   failure: (actionType) => ({ type: actionType.concat('/', HttpResponseTypes.FAILURE) }),
};

export default requestStatusAction;