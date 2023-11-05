import { savesDB } from '../db/index.js';

const { saves } = savesDB.data;
const nextId = Math.max(...saves.map(like => like.id), 0) + 1;

class SaveService {
  static async create(req) {
    try {
      const { save, post_id } = req.body;
      if (save) {
        const newData = {
          id: nextId,
          post_id,
          user_id: 1, // TODO: dynmaic yap authorzed user id kullan
          created_at: new Date().toString()
        };
        saves.push(newData);
      } else {
        const indexToRemove = saves.findIndex((obj) => obj.post_id === post_id && obj.user_id === 1); // TODO: authorized user id => dynamic yap
        if (indexToRemove === -1) {
          return {
            type: false,
            message: `Post with ${post_id} couldn't find`
          };
        }
        saves.splice(indexToRemove, 1);
      }
      await savesDB.write();
      return {
        type: true,
        message: save ? 'Post is saved': 'Post is unsaved'
      };
    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }
}

export default SaveService;