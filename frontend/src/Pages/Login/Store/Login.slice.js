import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helpers/requestStatusReducer';
import { LoginSagaActions } from './Login.saga';

const NAME = 'Login';

const initialState = {
  
};

const LoginSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => requestStatusReducer(builder, LoginSagaActions)
});

const { actions, reducer } = LoginSlice;
export const LoginActions = actions;
export default reducer;