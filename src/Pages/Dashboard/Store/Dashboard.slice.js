import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';
import { DashboardSagaActions } from './Dashboard.saga';

const NAME = 'Dashboard';

const initialState = {
   posts: [],
   page: 1, //* buraları tekrar düşün eğer 4 tane post gelirse ve 1 tane oluşturursam 5 tane post olur sayfa değişmez vs.
   limit: 10,
   canBeMorePost: true
};

const DashboardSlice = createSlice({
   name: NAME,
   initialState,
   reducers: {
      setPosts: (state, action) => {
         state.posts = [...state.posts, ...action.payload];
         if ((state.posts.length + action.payload.length) >= state.limit * state.page) {
            state.page += 1;
         }
         if (action.payload.length < state.limit) {
            state.canBeMorePost = false;
         }
      },
      setPage: (state, action) => {
         state.page = action.payload;
      }
   },
   extraReducers: (builder) => requestStatusReducer(builder, DashboardSagaActions)
});

const { reducer, actions } = DashboardSlice;

export const DashboardActions = actions;
export default reducer;