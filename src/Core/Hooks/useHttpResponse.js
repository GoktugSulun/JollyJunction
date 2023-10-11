import { useDispatch, useSelector } from 'react-redux';
import requestStatusAction from '../Helper/requestStatusAction';
import { HttpResponseTypes } from '../Constants/Enums';
import { useEffect } from 'react';

/**
   @param {Object} {idle, loading, success, failure} => functions
   @param {Object} sagaAction 
*/

const useHttpResponse = (
   { idle, loading, success, failure }, 
   sagaAction
) => {
   const dispatch = useDispatch();
   const [sliceName,,actionType] = sagaAction.type.split('/');

   const requestStatus = useSelector((state) => state[sliceName]?.requestStatus?.[actionType]) ?? HttpResponseTypes.IDLE;
   const payload = useSelector((state) => state[sliceName]?.actionPayload?.[actionType]) ?? null;

   const idleAction = () => {
      dispatch(requestStatusAction.idle(sagaAction.type));
   };

   useEffect(() => {
      switch (requestStatus) {
         case HttpResponseTypes.IDLE:
            idle?.({ idleAction, payload });
            loading?.(false);
            break;
         case HttpResponseTypes.LOADING:
            loading?.(true);
            break;
         case HttpResponseTypes.SUCCESS:
            success?.({ idleAction, payload });
            loading?.(false);
            break;
         case HttpResponseTypes. FAILURE:
            failure?.({ idleAction, payload });
            loading?.(false);
            break;
         default:
            throw Error('useHttpResponse: undefined requestStatus value!');
      }
   }, [requestStatus]);

};

export default useHttpResponse;