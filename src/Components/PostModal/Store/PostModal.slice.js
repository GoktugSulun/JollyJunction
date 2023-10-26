import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';
import { PostModalSagaActions } from './PostModal.saga';

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
    setPostData: (state, action) => {
      state.postData = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    handleModal: (state, action) => {
      state.isOpen = action.payload;
    }
  },
  extraReducers: (builder) => requestStatusReducer(builder, PostModalSagaActions)
});

const { actions, reducer } = PostModalSlice;
export const PostModalActions = actions;
export default reducer;