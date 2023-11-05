import { DashboardSagaActions } from '../../Pages/Dashboard/Store/Dashboard.saga';

export const postUpdateReducer = (builder) => {
  builder.addCase(DashboardSagaActions.likePost, (state, action) => {
    const { post_id, like } = action.payload;
    state.posts = state.posts.map((obj) => 
      obj.id === post_id 
        ? {
          ...obj, 
          liked: like, 
          likes_count: like ? obj.likes_count + 1 : obj.likes_count - 1 
        } 
        : obj
    );
  });
  builder.addCase(DashboardSagaActions.savePost, (state, action) => {
    const { post_id, save } = action.payload;
    state.posts = state.posts.map((obj) => 
      obj.id === post_id 
        ? { ...obj, saved: save, } 
        : obj
    );
  });
};