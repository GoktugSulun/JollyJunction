import ResponseEnums from '../constants/Enums/ResponseEnums.js';
import Helpers from '../helpers/Helpers.js';
import PostService from '../services/PostService.js';

class PostController {
  static async getAll(req, res) {
    try {
      const result = await PostService.getAll(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const result = await PostService.getById(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }
  /**
   * @query = page, limit
  */
  static async get(req, res) {
    setTimeout(async () => {
      try {
        const result = await PostService.get(req, res);
        Helpers.responseJSON(res, result);
      } catch (error) {
        Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
      }
    }, 3000);
  }

  static async create(req, res) {
    setTimeout(async () => {
      try {
        const result = await PostService.create(req, res);
        Helpers.responseJSON(res, result);
      } catch (error) {
        Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
      }
    }, 3000);
  }

  static async like(req, res) {
    try {
      const likeResult = await PostService.like(req, res);
      Helpers.responseJSON(res, likeResult);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async save(req, res) {
    try {
      const result = await PostService.save(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async delete(req, res) {
    setTimeout(async () => {
      try {
        const result = await PostService.delete(req, res);
        Helpers.responseJSON(res, result);
      } catch (error) {
        Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
      }
    }, 5000);
  }
}
  
export default PostController;