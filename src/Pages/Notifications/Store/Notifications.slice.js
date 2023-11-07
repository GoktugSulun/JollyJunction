import { createSlice } from '@reduxjs/toolkit';
import { NotificationSagaActions } from './Notifications.saga';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';

const NAME = 'Notifications';

const initialState = {
  notifications: [],
  targetNotificationIds: []
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
    },
    unshiftNotification: (state, action) => {
      state.notifications.unshift(action.payload);
    },
    markNotificationsSeen: (state) => {
      state.notifications = state.notifications.map((obj) => ({ ...obj, seen: true }));
    },
    markNotificationsRead: (state, action) => {
      const { notification_ids } = action.payload;
      state.notifications = state.notifications.map((obj) => {
        if (notification_ids.includes(obj.id)) {
          return { ...obj, read: true };
        }
        return obj;
      });
    },
    setTargetNotificationIds: (state, action) => {
      state.targetNotificationIds = action.payload;
    }
  },
  extraReducers: (builder) => requestStatusReducer(builder, NotificationSagaActions)
});

const { reducer, actions } = NotificationSlice;

export const NotificationActions = actions;
export default reducer;