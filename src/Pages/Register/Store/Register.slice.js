import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';
import { RegisterSagaActions } from './Register.saga';

const NAME = 'Register';

const initialState = {};

const RegisterSlice = createSlice({
   name: NAME,
   initialState,
   reducers: {},
   extraReducers: (builder) => requestStatusReducer(builder, RegisterSagaActions)
});

const { actions, reducer } = RegisterSlice;
export const RegisterActions = actions;
export default reducer;