import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';
import { PostModalSagaActions } from './PostModal.saga';
import { likePostHandler, savePostHandler } from '../../../Core/Helper/commonSliceActions';

const NAME = 'PostModal';

const initialState = {
  isOpen: false,
  page: 1,
  limit: 10,
  canBeMoreComment: true,
  postData: {},
  comments: []
};

const PostModalSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setReset: () => initialState,
    setPostData: (state, action) => {
      state.postData = action.payload;
    },
    setComments: (state, action) => {
      state.comments = [...state.comments, ...action.payload];
      if ((state.comments.length + action.payload.length) >= state.limit * state.page) {
        state.page += 1;
      }
      if (action.payload.length < state.limit) {
        state.canBeMoreComment = false;
      }
    },
    handleModal: (state, action) => {
      state.isOpen = action.payload;
    },
    setComment: (state, action) => {
      state.comments.unshift(action.payload);
      state.postData.comments_count++;
    },
    likePost: likePostHandler,
    savePost: savePostHandler
  },
  extraReducers: (builder) => requestStatusReducer(builder, PostModalSagaActions)
});

const { actions, reducer } = PostModalSlice;
export const PostModalActions = actions;
export default reducer;