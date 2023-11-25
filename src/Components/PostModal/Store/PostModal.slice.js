import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';
import { PostModalSagaActions } from './PostModal.saga';
import { likePostHandler, savePostHandler } from '../../../Core/Helper/commonSliceActions';

const NAME = 'PostModal';

const initialState = {
  isOpen: false,
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
      state.comments = action.payload;
    },
    handleModal: (state, action) => {
      state.isOpen = action.payload;
    },
    setComment: (state, action) => {
      state.comments = [action.payload, ...state.comments];
      state.postData.comments = [action.payload, ...state.postData.comments];
    },
    likePost: likePostHandler,
    savePost: savePostHandler
  },
  extraReducers: (builder) => requestStatusReducer(builder, PostModalSagaActions)
});

const { actions, reducer } = PostModalSlice;
export const PostModalActions = actions;
export default reducer;