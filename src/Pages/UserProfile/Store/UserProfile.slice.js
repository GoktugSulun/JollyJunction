import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';
import { UserProfileSagaActions } from './UserProfile.saga';

const NAME = 'UserProfile';

const initialState = {
  user: {},
};

const UserProfileSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setReset: () => initialState,
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => { requestStatusReducer(builder, UserProfileSagaActions); }
});

const { reducer, actions } = UserProfileSlice;

export const UserProfileActions = actions;
export default reducer;