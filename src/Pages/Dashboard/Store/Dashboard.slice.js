import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';
import { DashboardSagaActions } from './Dashboard.saga';

const NAME = 'Dashboard';

const initialState = {
   posts: []
};

const DashboardSlice = createSlice({
   name: NAME,
   initialState,
   reducers: {
      setPosts: (state, action) => {
         state.posts = action.payload;
      }
   },
   extraReducers: (builder) => requestStatusReducer(builder, DashboardSagaActions)
});

const { reducer, actions } = DashboardSlice;

export const DashboardActions = actions;
export default reducer;