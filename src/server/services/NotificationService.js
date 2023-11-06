import {  notificationsDB } from '../db/index.js';
import UserService from './UserService.js';

const { notifications } = notificationsDB.data;

const getUser = async (id) => {
  const user = await UserService.getById({ params: { id }});
  if (!user.type) {
    return null;
  }
  return user.data;
};

class NotificationService {
  static async get(req) {
    try {
      const { receiver_id, is_removed, seen, read } = req.query;
      const condition = (data) => ({
        ...(is_removed !== undefined ? { is_removed: data.is_removed === JSON.parse(is_removed) } : {}),
        ...(seen !== undefined ? { seen: data.seen === JSON.parse(seen) } : {}),
        ...(read !== undefined ? { read: data.read === JSON.parse(read) } : {}),
        ...(receiver_id !== undefined ? { read: data.receiver_id === parseInt(receiver_id) } : {})
      });
      const data = notifications.filter((obj) => Object.values(condition(obj)).every(Boolean));
      const sortedData = [...data].sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      const result = await Promise.all(sortedData.map(async (obj) => {
        try {
          const receiver_user = await getUser(obj.receiver_id);
          const sender_user = await getUser(obj.sender_id);
        
          return {
            ...obj,
            receiver_user,
            sender_user
          };
        } catch (error) {
          console.log(error.message, ' ERROR!!!!!');
          return null;
        }
      }));

      if (result.some((obj) => obj === null || obj.receiver_user === null || obj.sender_user === null)) {
        return {
          type: false,
          message: 'Some items of notification are null',
          data: result
        };
      }

      return {
        type: true,
        message: 'Fetched notifications',
        data: result
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