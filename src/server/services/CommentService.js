import { commentsDB } from '../db/index.js';
import { authorizedUserId } from '../server.js';

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
          message: `Comment with id ${id} couldn't find`,
          data: result
        };
      }

      const result = data;
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
   * @query = page, limit
  */
  static async get(req, res) {
    try {
      const { comments } = commentsDB.data;
      const { page, limit, post_id } = req.query;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit; 
      const filteredData = comments.filter((obj) => obj.post_id === parseInt(post_id));
      const sortedData = [...filteredData].sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      const data = sortedData.slice(startIndex, endIndex);
      const result = data;
      return {
        type: true,
        message: `Comments has been fetched for post with id ${post_id}`,
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
      const { comments } = commentsDB.data;
      const nextId = Math.max(...comments.map(comment => comment.id), 0) + 1;
      const data = req.body;
      data.id = nextId;
      data.user_id = authorizedUserId;
      data.created_at = new Date().toString();
      data.updated_at = new Date().toString();
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
}
  
export default CommentService;