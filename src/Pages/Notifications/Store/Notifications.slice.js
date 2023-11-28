import { createSlice } from '@reduxjs/toolkit';
import { NotificationSagaActions } from './Notifications.saga';
import requestStatusReducer from '../../../Core/Helpers/requestStatusReducer';

const NAME = 'Notifications';

const initialState = {
  notifications: [],
  targetNotificationIds: [],
  targetRemovedNotificationsIds: [],
  page: 1,
  limit: 10,
  canBeMore: true,
};

const NotificationSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setReset: () => initialState,
    setNotifications: (state, action) => {
      state.notifications = [...state.notifications, ...action.payload];
    },
    setNotification: (state, action) => {
      state.notifications.unshift(action.payload);
    },
    filterNotifications: (state, action) => {
      const { notification_ids } = action.payload;
      state.notifications = state.notifications.filter((obj) => !notification_ids.includes(obj.id));
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
    },
    setTargetRemovedNotificationIds: (state, action) => {
      state.targetRemovedNotificationsIds = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCanBeMore: (state, action) => {
      if (action.payload) {
        state.page += 1;
      }
      state.canBeMore = action.payload;
    }
  },
  extraReducers: (builder) => requestStatusReducer(builder, NotificationSagaActions)
});

const { reducer, actions } = NotificationSlice;

export const NotificationActions = actions;
export default reducer;