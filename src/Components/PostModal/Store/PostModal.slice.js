import { createSlice } from '@reduxjs/toolkit';
import requestStatusReducer from '../../../Core/Helper/requestStatusReducer';

const NAME = 'PostModal';

const initialState = {
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
    }
  },
  extraReducers: (builder) => requestStatusReducer(builder)
});

const { actions, reducer } = PostModalSlice;
export const PostModalActions = actions;
export default reducer;