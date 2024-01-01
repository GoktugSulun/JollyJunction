import ResponseEnums from '../constants/Enums/ResponseEnums.js';

class Helpers {
  static responseMessage(res, type, message, data = undefined) {
    res.json({
      type,
      message: message,
      // ...(data ? { data } : {})
      data
    });
  }

  static responseJSON(res, result) {
    if (result.type) {
      Helpers.responseMessage(res, ResponseEnums.SUCCESS, result.message, result.data);
    } else {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, result.message);
    }
  }
}

export default Helpers;