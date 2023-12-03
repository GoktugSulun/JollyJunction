import { createSlice } from '@reduxjs/toolkit';
import { NotifierTypes } from '../Constants/Enums';
import requestStatusReducer from '../Helpers/requestStatusReducer';
import { AppConfigSagaActions } from './AppConfig.saga';

const NAME = 'AppConfig';

const initialState = {
  notifications: [],
  init: {
    authorizedUser: {},
    unseenNotificationsCount: 0,
    advertisements: []
  },
};

const AppConfigSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    enqueueSnackbar: (state, action) => {
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
    },
    setInit: (state, action) => {
      state.init = action.payload;
    },
    setUnseenNotificationsCount: (state, action) => {
      state.init.unseenNotificationsCount = action.payload;
    },
    setUser: (state, action) => {
      state.init.authorizedUser = action.payload;
    }
  },
  extraReducers: (builder) => requestStatusReducer(builder, AppConfigSagaActions)
});

const { actions, reducer } = AppConfigSlice;

export const AppConfigActions = actions;
export default reducer;