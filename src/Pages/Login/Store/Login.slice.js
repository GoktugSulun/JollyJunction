import { createSlice } from '@reduxjs/toolkit';

const NAME = 'Login';

const initialState = {
   user: {}
};

const LoginSlice = createSlice({
   name: NAME,
   initialState,
   reducers: {
      setUser: (state, action) => {
         state.user = action.payload;
      }
   }
});

const { actions, reducer } = LoginSlice;
export const LoginActions = actions;
export default reducer;