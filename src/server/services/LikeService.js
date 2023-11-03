import { likesDB } from '../db/index.js';

let nextId = 1;

const { likes } = likesDB.data;

class LikeService {
  static async create(req) {
    console.log(111);
    try {
      console.log(req.body,  ' bss');
      const { like, post_id } = req.body;
      if (like) {
        console.log(555);
        const newData = {
          id: nextId++,
          post_id,
          user_id: 1, // TODO: dynmaic yap authorzed user id kullan
          date: new Date().toString()
        };
        likes.push(newData);
        await likesDB.write();
      } else {
        const updatedLikes = likes.filter((obj) => obj.post_id === post_id && obj.user_id === 1); // TODO: authorized user id => dynamic yap
        likesDB.data.likes = updatedLikes;
      }
      // console.log(3333, ' ', likesDB);
      // await likesDB.write();
      // console.log(4444);
      return {
        type: true,
        message: like ? 'Post beğenildi': 'Beğeni geri çekildi'
      };
    } catch(error){
      console.log(222);
      return {
        type: false,
        message: error.message
      };
    }
  }
}

export default LikeService;