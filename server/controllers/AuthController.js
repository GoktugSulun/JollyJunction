import ResponseEnums from '../constants/Enums/ResponseEnums.js';
import Helpers from '../helpers/Helpers.js';
import AuthService from '../services/AuthService.js';

class AuthController {
  static async login(req, res) {
    setTimeout(async () => {
      try {
        const result = await AuthService.login(req, res);
        Helpers.responseJSON(res, result);
      } catch (error) {
        Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
      }
    }, 3000);
  }

  static async register(req, res) {
    setTimeout(async () => {
      try {
        const result = await AuthService.register(req, res);
        Helpers.responseJSON(res, result);
      } catch (error) {
        Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
      }
    }, 3000);
  }
}
  
export default AuthController;