import { likesDB } from '../db/index.js';

const { likes } = likesDB.data;
const nextId = Math.max(...likes.map(like => like.id), 0) + 1;

class LikeService {
  static async create(req) {
    try {
      const { like, post_id } = req.body;
      if (like) {
        const newData = {
          id: nextId,
          post_id,
          user_id: 1, // TODO: dynmaic yap authorzed user id kullan
          created_at: new Date().toString()
        };
        likes.push(newData);
      } else {
        const indexToRemove = likes.findIndex((obj) => obj.post_id === post_id && obj.user_id === 1); // TODO: authorized user id => dynamic yap
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
}

export default LikeService;