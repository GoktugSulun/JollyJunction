import { commentsDB, likesDB, postsDB, savesDB, usersDB } from '../db/index.js';
import LikeService from './LikeService.js';

let nextId = 1;
const { posts } = postsDB.data;
const { likes } = likesDB.data;
const { saves } = savesDB.data;
const { comments } = commentsDB.data;
const { users } = usersDB.data;

class PostService {
  static async getAll() {
    try {
      return {
        type: true,
        message: 'Posts has been fetched',
        data: posts
      };
    } catch (error) {
      return {
        type: false,
        message: error.message,
      };
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const data = posts.find((obj) => obj.id === Number(id));
      return {
        type: true,
        message: data ? 'Post with ${id} id has been fetched' : "Post with ${id} couldn't find",
        data: data || {}
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }
  /**
   * @query = page, limit
  */
  static async get(req, res) {
    try {
      const { page, limit } = req.query;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit; 
      const data = posts.slice(startIndex, endIndex);
      const result = data.map((obj) => (
        { 
          ...obj, 
          likes_count: likes.filter((likeObj) => likeObj.post_id === obj.id).length,
          comments_count: comments.filter((commentObj) => commentObj.post_id === obj.id).length,
          liked: !!likes.find((likeObj) => likeObj.user_id === 1), //TODO: 1 => authorizedUser.id olmalı dynamic yap.
          saved: !!saves.find((saveObj) => saveObj.user_id === 1), //TODO: 1 => authorizedUser.id olmalı dynamic yap.
          user: users.find((userObj) => userObj.id === obj.user_id)
        }
      ));
      return {
        type: true,
        message: 'Posts has been fetched',
        data: result
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
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
      return {
        type: true,
        message: 'Post is created',
        data
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async like(req, res) {
    try {
      const result = await LikeService.create(req, res);
      return {
        type: result.type,
        message: result.message
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }
}
  
export default PostService;