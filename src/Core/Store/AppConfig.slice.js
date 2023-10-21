import { createSlice } from '@reduxjs/toolkit';
import { NotifierTypes } from '../Constants/Enums';

const NAME = 'AppConfig';

const initialState = {
   notifications: []
};

const AppConfigSlice = createSlice({
   name: NAME,
   initialState,
   reducers: {
      enqueueSnackbar: (state, action) => {
         console.log(action.payload, ' acc');
         const newNotification = {
            message: action.payload?.message || '',
            options: {
               ...(action.payload?.options || {}),
               key: new Date().getTime() + Math.random() * 999,
               variant: action.payload?.options?.variant || NotifierTypes.SUCCESS
            }
         };
         state.notifications.push(newNotification);
      },
      closeSnackbar: (state, action) => {
         state.notifications = [...state.notifications.filter((notification) => notification.options.key !== action.payload)];
      }
   }
});

const { actions, reducer } = AppConfigSlice;

export const AppConfigActions = actions;
export default reducer;