class Helpers {
  static responseMessage(res, type, message, data = undefined) {
    res.json({
      type,
      message: message,
      // ...(data ? { data } : {})
      data
    });
  }
}

export default Helpers;