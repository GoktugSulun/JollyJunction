import ResponseEnums from '../constants/Enums/ResponseEnums.js';
import Helpers from '../helpers/Helpers.js';
import UserService from '../services/UserService.js';

class UserController {
  static async getAll(req, res) {
    try {
      const result = await UserService.getAll();
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const result = await UserService.getById(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async create(req, res) {
    try {
      const result = await UserService.create(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async edit(req, res) {
    setTimeout(async () => {
      try {
        const result = await UserService.edit(req, res);
        Helpers.responseJSON(res, result);
      } catch (error) {
        Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
      }
    }, 3000);
  }
}
  
export default UserController;