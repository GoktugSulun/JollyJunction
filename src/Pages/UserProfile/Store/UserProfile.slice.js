import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';
import { UserProfileSagaActions } from './UserProfile.saga';
import { likePostHandler, savePostHandler } from '../../../Core/Helper/commonSliceActions';

const NAME = 'UserProfile';

const initialState = {
  posts: [],
  user: {},
  page: 1,
  limit: 10,
  canBeMorePost: true
};

const UserProfileSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setReset: () => initialState,
    setPosts: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
      if ((state.posts.length + action.payload.length) >= state.limit * state.page) {
        state.page += 1;
      }
      if (action.payload.length < state.limit) {
        state.canBeMorePost = false;
      }
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setComments: (state, action) => {
      const { data, post_id } = action.payload;
      state.posts = state.posts.map((obj) => obj.id === post_id ? { ...obj, comments: data } : obj);
    },
    likePost: likePostHandler,
    savePost: savePostHandler
  },
  extraReducers: (builder) => { requestStatusReducer(builder, UserProfileSagaActions); }
});

const { reducer, actions } = UserProfileSlice;

export const UserProfileActions = actions;
export default reducer;