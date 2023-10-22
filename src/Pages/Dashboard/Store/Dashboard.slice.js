import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';
import { DashboardSagaActions } from './Dashboard.saga';

const NAME = 'Dashboard';

const initialState = {
   posts: [],
   notificationsICreated: [],
   page: 1,
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
      //* after creating a post, this func is called to update posts state
      setPost: (state, action) => {
         state.posts.unshift(action.payload);
         if ((state.posts.length + 1) >= state.limit * state.page) {
            state.page += 1;
         }
      },
      //* after like process, this func is called to update posts state
      updatePost: (state, action) => {
         const { post_id, data } = action.payload;
         state.posts = state.posts.map((obj) => obj.id === post_id ? data : obj);
      },
      setNotificationsICreated: (state, action) => {
         state.notificationsICreated = action.payload;
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