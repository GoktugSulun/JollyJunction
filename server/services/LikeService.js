import { commentsDB, likesDB } from '../db/index.js';
import { authorizedUserId } from '../server.js';
import CommentService from './CommentService.js';


class LikeService {
  static async createForPost(req) {
    try {
      const { likes } = likesDB.data;
      const nextId = Math.max(...likes.map(like => like.id), 0) + 1;
      const { like, post_id } = req.body;
      if (like) {
        const newData = {
          id: nextId,
          post_id,
          user_id: authorizedUserId,
          created_at: new Date().toString()
        };
        likes.push(newData);
      } else {
        const indexToRemove = likes.findIndex((obj) => obj.post_id === post_id && obj.user_id ===  authorizedUserId,);
        if (indexToRemove === -1) {
          return {
            type: false,
            message: `Post with ${post_id} couldn't find`
          };
        }
        likes.splice(indexToRemove, 1);
      }
      await likesDB.write();
      return {
        type: true,
        message: like ? 'Post is liked': 'Post is unliked'
      };
    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async createForComment(req) {
    try {
      const { id, like } = req.body;
      const commentService = await CommentService.getById({ params: { id } });
      if (!commentService.type) {
        return {
          type: false,
          message: commentService.message
        };
      }
      
      const commentData = { 
        ...commentService.data, 
        likes: like
          ? [...commentService.data.likes, authorizedUserId]
          : commentService.data.likes.filter((user_id) => user_id !== authorizedUserId)
      };
      const { comments } = commentsDB.data;
      const index = comments.findIndex((obj) => obj.id === parseInt(id));
      comments.splice(index, 1, commentData);

      await commentsDB.write();

      return {
        type: true,
        message: like ? 'Comment is liked': 'Comment like is withdrawn',
        data: commentData
      };
    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }
}

export default LikeService;