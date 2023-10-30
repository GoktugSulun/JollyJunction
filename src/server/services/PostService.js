import ResponseEnums from '../constants/Enums/ResponseEnums.js';
import { postsDB } from '../db/index.js';
import Helpers from '../helpers/Helpers.js';

let nextId = 1;
const { posts } = postsDB.data;

class PostService {
  static async getAll(req, res) {
    try {
      Helpers.responseMessage(res, ResponseEnums.SUCCESS, 'Posts has been fetched', posts);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async get(req, res) {
    try {
      const { id } = req.params;
      const data = posts.find((obj) => obj.id === Number(id));
      if (data) {
        Helpers.responseMessage(res, ResponseEnums.SUCCESS, `Post with ${id} id has been fetched`, data);
      } else {
        Helpers.responseMessage(res, ResponseEnums.SUCCESS, `Post with ${id} couldn't find`, {});
      }
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async create(req, res) {
    try {
      const data = req.body;
      data.id = nextId++;
      data.created_at = new Date().toString();
      data.updated_at = new Date().toString();
      posts.push(data);
      await postsDB.write();
      Helpers.responseMessage(res, ResponseEnums.SUCCESS, 'Post is created', data);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }
}
  
export default PostService;