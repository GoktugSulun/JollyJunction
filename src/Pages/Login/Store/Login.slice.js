import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';
import { LoginSagaActions } from './Login.saga';

const NAME = 'Login';

const initialState = {
   user: {}
};

const LoginSlice = createSlice({
   name: NAME,
   initialState,
   reducers: {
      setUser: (state, action) => {
         state.user = action.payload;
      }
   },
   extraReducers: (builder) => requestStatusReducer(builder, LoginSagaActions)
});

const { actions, reducer } = LoginSlice;
export const LoginActions = actions;
export default reducer;