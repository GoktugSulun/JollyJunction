import ResponseEnums from '../constants/Enums/ResponseEnums.js';
import Helpers from '../helpers/Helpers.js';
import NotificationService from '../services/NotificationService.js';

class NotificationController {
  static async get(req, res) {
    try {
      const result = await NotificationService.get(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async seen(req, res) {
    try {
      const result = await NotificationService.seen(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async read(req, res) {
    try {
      const result = await NotificationService.read(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async delete(req, res) {
    try {
      const result = await NotificationService.delete(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async friendship(req, res) {
    try {
      const result = await NotificationService.friendship(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async addFriend(req, res) {
    try {
      const result = await NotificationService.addFriend(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }
}
  
export default NotificationController;