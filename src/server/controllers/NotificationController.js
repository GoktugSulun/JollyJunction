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
}
  
export default NotificationController;