class Helpers {
  static responseMessage(res, type, message, data) {
    res.json({
      type,
      message: message,
      ...(data ? { data } : {})
    });
  }
}

export default Helpers;