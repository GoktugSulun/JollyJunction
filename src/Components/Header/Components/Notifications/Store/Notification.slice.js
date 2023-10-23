import { createSlice } from '@reduxjs/toolkit';
import { NotificationSagaActions } from './Notification.saga';
import requestStatusReducer from '../../../../../Core/Helper/requestStatusReducer';

const NAME = 'Notification';

const initialState = {
   notifications: [],
};

const NotificationSlice = createSlice({
   name: NAME,
   initialState,
   reducers: {
      setNotifications: (state, action) => {
         state.notifications = action.payload;
      },
      filterNotifications: (state, action) => {
         const { notification_id } = action.payload;
         state.notifications = state.notifications.filter((obj) => obj.id !== notification_id);
      }
   },
   extraReducers: (builder) => requestStatusReducer(builder, NotificationSagaActions)
});

const { reducer, actions } = NotificationSlice;

export const NotificationActions = actions;
export default reducer;