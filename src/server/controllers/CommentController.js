import ResponseEnums from '../constants/Enums/ResponseEnums.js';
import Helpers from '../helpers/Helpers.js';
import CommentService from '../services/CommentService.js';

class CommentController {
  static async getAll(req, res) {
    try {
      const result = await CommentService.getAll();
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const result = await CommentService.getById(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }
  /**
   * @query = page, limit
  */
  static async get(req, res) {
    try {
      const result = await CommentService.get(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async create(req, res) {
    try {
      const result = await CommentService.create(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async like(req, res) {
    try {
      const result = await CommentService.like(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async delete(req, res) {
    setTimeout(async () => {
      try {
        const result = await CommentService.delete(req, res);
        Helpers.responseJSON(res, result);
      } catch (error) {
        Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
      }
    }, 10000);
  }
}
  
export default CommentController;