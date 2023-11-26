import { commentsDB } from '../db/index.js';
import { authorizedUserId } from '../server.js';
import LikeService from './LikeService.js';
import UserService from './UserService.js';

class CommentService {
  static async getAll() {
    const { comments } = commentsDB.data;
    try {
      return {
        type: true,
        message: 'All comments has been fetched',
        data: comments
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
      const { comments } = commentsDB.data;
      const { id } = req.params;
      const data = comments.find((obj) => obj.id === parseInt(id));
      if (!data) {
        return {
          type: false,
          message: `Comment with id ${id} couldn't find`
        };
      }
      
      const commentService = await UserService.getById({ params: { id: data.user_id } });
      if (!commentService.type) {
        return {
          type: false,
          message: commentService.message
        };
      }

      const result = { ...data, user: commentService.data };
      return {
        type: true,
        message: `Comment with id ${id} has been fetched`,
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
   * @query = page, limit, post_id, is_removed
  */
  static async get(req, res) {
    try {
      const { comments } = commentsDB.data;
      const { page, limit, ...queries } = req.query;

      const filteredData = comments.filter((obj) => {
        return Object.entries(queries).every(([key, value]) => {
          return value !== undefined ? String(obj[key]) === value : true;
        });
      });
      const sortedData = [...filteredData].sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit; 
      const slicedData = sortedData.slice(startIndex, endIndex);

      const data = await Promise.all(slicedData.map(async(obj) => {
        const userDetail = await UserService.getById({ params: { id: obj.user_id }});
        return { ...obj, user: userDetail?.data };
      }));

      return {
        type: true,
        message: 'Comments has been fetched',
        data
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
      const { comments } = commentsDB.data;
      const nextId = Math.max(...comments.map(comment => comment.id), 0) + 1;
      const data = req.body;
      data.id = nextId;
      data.user_id = authorizedUserId;
      data.likes = [];
      data.created_at = new Date().toString();
      data.updated_at = new Date().toString();
      data.is_removed = false;
      comments.push(data);
      await commentsDB.write();

      //* get post that has just created
      const createdData = await CommentService.getById({ params: { id: data.id } });
      if (!createdData.type) {
        return {
          type: false,
          message: "Couldn't fetch created data"
        };
      }

      const user = await UserService.getById({ params: { id: data.user_id }});
      const result = { ...createdData.data, user: user.data };
      
      return {
        type: true,
        message: 'Comment is created',
        data: result
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
      const commentService = await LikeService.createForComment(req, res);
      
      return {
        type: commentService.type,
        message: commentService.message,
        data: commentService.data
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const { comments } = commentsDB.data;
      
      const index = comments.findIndex((obj) => obj.id === parseInt(id));
      if (index === -1) {
        return {
          type: false,
          message: `Comment with id ${id} couldn't find`
        };
      }
      
      const commentData = { ...comments[index], is_removed: true };
      comments.splice(index, 1, commentData);
      await commentsDB.write();

      return {
        type: true,
        message: 'Comment is removed'
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }
}
  
export default CommentService;