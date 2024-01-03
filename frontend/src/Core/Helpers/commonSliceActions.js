export const likePostHandler = (state, action) => {
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
};

export const savePostHandler = (state, action) => {
  const { post_id, save } = action.payload;
  state.posts = state.posts.map((obj) => 
    obj.id === post_id 
      ? { ...obj, saved: save, } 
      : obj
  );
};