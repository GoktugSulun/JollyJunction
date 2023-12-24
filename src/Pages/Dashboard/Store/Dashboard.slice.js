import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helpers/requestStatusReducer';
import { DashboardSagaActions } from './Dashboard.saga';
import { likePostHandler, savePostHandler } from '../../../Core/Helpers/commonSliceActions';

const NAME = 'Dashboard';

const initialState = {
  posts: [],
  page: 1,
  limit: 10,
  canBeMorePost: true,
  pageForFriendList: 1,
  limitForFriendList: 10,
  canBeMoreFriends: true,
  friends: [],
  isMuted: true,
  videoData: {
    isLegal: false, //* when postModal is closed, it is gonna be true and after video settings is changed, it is gonna be again false.
    currentTime: 0,
    isPlaying: false
  },
  postsInProcess: [] 
};

const DashboardSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setReset: (state) => {
      return { ...initialState, friends: state.friends };
    },
    setPosts: (state, action) => {
      if (state.page === 1) {
        state.posts = action.payload;
      } else {
        state.posts = [...state.posts, ...action.payload];
      }

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
    deletePost: (state, action) => {
      const { id } = action.payload;
      state.posts = state.posts.filter((obj) => obj.id !== id);
    },
    setIsMuted: (state, action) => {
      state.isMuted = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCommentCount: (state, action) => {
      const { post_id, comments_count } = action.payload;
      state.posts = state.posts.map((obj) => obj.id === post_id ? { ...obj, comments_count } : obj);
    },
    decreaseCommentCount: (state, action) => {
      const { post_id } = action.payload;
      state.posts = state.posts.map((obj) => obj.id === post_id ? { ...obj, comments_count: obj.comments_count - 1 } : obj);
    },
    editFriendAttribute: (state, action) => {
      const { receiver_id, canBeFriend } = action.payload;
      state.posts = state.posts.map((obj) => {
        if (obj.user.id === receiver_id) {
          return { ...obj, canBeFriend };
        }
        return obj;
      });
    },
    setFriends: (state, action) => {
      if (state.pageForFriendList === 1) {
        state.friends = action.payload;
      } else {
        state.friends = [...state.friends, ...action.payload];
      }

      if ((state.friends.length + action.payload.length) >= state.limitForFriendList * state.pageForFriendList) {
        state.pageForFriendList += 1;
      }
      if (action.payload.length < state.limitForFriendList) {
        state.canBeMoreFriends = false;
      }
    },
    setPageForFriendList: (state, action) => {
      state.pageForFriendList = action.payload;
    },
    setVideoData: (state, action) => {
      const { isLegal, currentTime, isPlaying } = action.payload;
      if (isLegal) {
        state.videoData = { isLegal, currentTime, isPlaying };
      } else {
        state.videoData = { isLegal: false, currentTime: 0, isPlaying: false };
      }
    },
    filterFriends: (state, action) => {
      const { friend_id } = action.payload;
      state.friends = state.friends.filter((obj) => obj.id !== friend_id);
    },
    setPostInProcess: (state, action) => {
      state.postsInProcess.push(action.payload);
    },
    removePostInProcess: (state, action) => {
      state.postsInProcess = state.postsInProcess.filter((id) => id !== action.payload);
    },
    likePost: likePostHandler,
    savePost: savePostHandler
  },
  extraReducers: (builder) => requestStatusReducer(builder, DashboardSagaActions)
});

const { reducer, actions } = DashboardSlice;

export const DashboardActions = actions;
export default reducer;