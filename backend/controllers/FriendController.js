import ResponseEnums from '../constants/Enums/ResponseEnums.js';
import Helpers from '../helpers/Helpers.js';
import FriendService from '../services/FriendService.js';

class FriendController {
  static async get(req, res) {
    try {
      const result = await FriendService.get(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async delete(req, res) {
    try {
      const result = await FriendService.delete(req, res);
      Helpers.responseJSON(res, result);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }
}
  
export default FriendController;