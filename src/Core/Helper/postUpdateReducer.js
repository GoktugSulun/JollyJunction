import { DashboardSagaActions } from '../../Pages/Dashboard/Store/Dashboard.saga';

export const postUpdateReducer = (builder) => {
  builder.addCase(DashboardSagaActions.likePost, (state, action) => {
    const { post_id, data } = action.payload;
    state.posts = state.posts.map((obj) => obj.id === post_id ? data : obj);
  });
  builder.addCase(DashboardSagaActions.savePost, (state, action) => {
    const { post_id, data } = action.payload;
    state.posts = state.posts.map((obj) => obj.id === post_id ? data : obj);
  });
};