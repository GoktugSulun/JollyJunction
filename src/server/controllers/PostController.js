import ResponseEnums from '../constants/Enums/ResponseEnums.js';
import Helpers from '../helpers/Helpers.js';
import PostService from '../services/PostService.js';

class PostController {
  static async getAll(req, res) {
    try {
      const result = await PostService.getAll();
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
    try {
      const result = await PostService.get(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async create(req, res) {
    try {
      const result = await PostService.create(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async like(req, res) {
    try {
      const result = await PostService.like(req, res);
      Helpers.responseJSON(res, result);
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
}
  
export default PostController;