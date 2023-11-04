import { likesDB } from '../db/index.js';


const { likes } = likesDB.data;
let nextId = Math.max(...likes.map(like => like.id), 0) + 1;

class LikeService {
  static async create(req) {
    try {
      const { like, post_id } = req.body;
      if (like) {
        const newData = {
          id: nextId++,
          post_id,
          user_id: 1, // TODO: dynmaic yap authorzed user id kullan
          date: new Date().toString()
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
      console.log(333);
      await likesDB.write();
      console.log(444);
      return {
        type: true,
        message: like ? 'Post beğenildi': 'Beğeni geri çekildi'
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