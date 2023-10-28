import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';
import { UserProfileSagaActions } from './UserProfile.saga';
import { DashboardSagaActions } from '../../Dashboard/Store/Dashboard.saga';
import { PostModalSagaActions } from '../../../Components/PostModal/Store/PostModal.saga';

const NAME = 'UserProfile';

const initialState = {
  posts: [],
  user: {},
  page: 1,
  limit: 10,
  canBeMorePost: true
};

const DashboardSlice = createSlice({
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
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DashboardSagaActions.likePost, (state, action) => {
      const { post_id, data } = action.payload;
      state.posts = state.posts.map((obj) => obj.id === post_id ? data : obj);
    });
    builder.addCase(DashboardSagaActions.savePost, (state, action) => {
      const { post_id, data } = action.payload;
      state.posts = state.posts.map((obj) => obj.id === post_id ? data : obj);
    });
    builder.addCase(PostModalSagaActions.createComment, (state, action) => {
      const { data, post_id } = action.payload;
      state.posts = state.posts.map((obj) => obj.id === post_id ? { ...obj, comments: data } : obj);
    });
    requestStatusReducer(builder, UserProfileSagaActions);
  }
});

const { reducer, actions } = DashboardSlice;

export const UserProfileActions = actions;
export default reducer;