import { commentsDB, postsDB, savesDB, likesDB, usersDB } from '../db/index.js';
import LikeService from './LikeService.js';
import SaveService from './SaveService.js';

const { posts } = postsDB.data;
const { likes } = likesDB.data;
const { saves } = savesDB.data;
const { comments } = commentsDB.data;
const { users } = usersDB.data;
const nextId = Math.max(...posts.map(post => post.id), 0) + 1;

// TODO: 1 => authorizedUser.id olmalı dynamic yap
const getPostDetail = (data) => (
  {
    ...data,
    likes_count: likes.filter((likeObj) => likeObj.post_id === data.id).length,
    comments_count: comments.filter((commentObj) => commentObj.post_id === data.id).length,
    liked: !!likes.find((likeObj) => likeObj.user_id === 1 && likeObj.post_id === data.id),
    saved: !!saves.find((saveObj) => saveObj.user_id === 1 && saveObj.post_id === data.id),
    user: users.find((userObj) => userObj.id === data.user_id)
  }
);
class PostService {
  static async getAll() {
    // TODO: bir sürü key eksik onları ekle
    try {
      return {
        type: true,
        message: 'All Posts has been fetched',
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
      if (!data) {
        return {
          type: false,
          message: `Post with ${id} couldn't find`,
          data: result
        };
      }

      const result = getPostDetail(data);
      return {
        type: true,
        message: `Post with ${id} id has been fetched`,
        data: result
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
      const sortedData = [...posts].sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      const data = sortedData.slice(startIndex, endIndex);
      const result = data.map((obj) => ( getPostDetail(obj) ));
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
      //* create a new post
      const data = req.body;
      data.id = nextId;
      data.created_at = new Date().toString();
      data.updated_at = new Date().toString();
      posts.push(data);
      await postsDB.write();

      //* get post that created
      const createdData = await PostService.getById({ params: { id: data.id } });
      if (!createdData.type) {
        return {
          type: false,
          message: "Couldn't fetch created data"
        };
      }
      return {
        type: true,
        message: 'Post is created',
        data: createdData.data
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

  static async save(req, res) {
    try {
      const result = await SaveService.create(req, res);
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