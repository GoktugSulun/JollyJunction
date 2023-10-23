import { createSlice } from '@reduxjs/toolkit';
import { NotificationSagaActions } from './Notificaiton.saga';
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
   },
   extraReducers: (builder) => requestStatusReducer(builder, NotificationSagaActions)
});

const { reducer, actions } = NotificationSlice;

export const NotificationActions = actions;
export default reducer;