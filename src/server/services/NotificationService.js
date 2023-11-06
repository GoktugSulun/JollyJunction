import {  notificationsDB } from '../db/index.js';

const { notifications } = notificationsDB.data;

class NotificationService {
  static async get(req, res) {
    try {
      const { receiver_id, is_removed, seen, read } = req.query;
      const data = notifications.filter((obj) => 
        obj.is_removed === is_removed 
            && obj.seen === seen 
            && obj.read === read 
            && obj.receiver_id === receiver_id
      );
      return {
        type: true,
        message: 'Fetched notifications',
        data
      };
    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }
}

export default NotificationService;