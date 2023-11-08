import NotificationTypes from '../../Core/Constants/Enums/NotificationTypes.js';
import FriendshipEnums from '../constants/Enums/FriendshipEnums.js';
import {  notificationsDB } from '../db/index.js';
import { authorizedUserId } from '../server.js';
import UserService from './UserService.js';

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
      const { notifications } = notificationsDB.data;
      const { receiver_id, is_removed, seen, read, page, limit } = req.query;
      const condition = (data) => ({
        ...(is_removed !== undefined ? { is_removed: data.is_removed === JSON.parse(is_removed) } : {}),
        ...(seen !== undefined ? { seen: data.seen === JSON.parse(seen) } : {}),
        ...(read !== undefined ? { read: data.read === JSON.parse(read) } : {}),
        ...(receiver_id !== undefined ? { read: data.receiver_id === parseInt(receiver_id) } : {})
      });
      const data = notifications.filter((obj) => Object.values(condition(obj)).every(Boolean));
      const sortedData = [...data];
      sortedData.sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()); 
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit; 
      const dataSlice = page ? sortedData.slice(startIndex, endIndex) : [...sortedData];

      const result = await Promise.all(dataSlice.map(async (obj) => {
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
        data: {
          notifications: result,
          more: data.length > page * limit
        }
      };
    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async getById(req) {
    try {
      const { notifications } = notificationsDB.data;
      const { id } = req.params;
      console.log(id, ' get by id si');
      const data = notifications.find((obj) => obj.id === id);

      if (!data) {
        return {
          type: false,
          message: `Couldn't find notification with id ${id}`
        };
      }

      const receiver_user = await getUser(data.receiver_id);
      const sender_user = await getUser(data.sender_id);
      if (!receiver_user || !sender_user) {
        return {
          type: false,
          message: 'Error occurs when fetching user information in getById function in NotificationService'
        };
      }

      const result = {
        ...data,
        receiver_user,
        sender_user
      };

      return {
        type: true,
        message: `Fetched notification with id ${id}`,
        data: result
      };

    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async create(req) {
    const { notifications } = notificationsDB.data;
    const nextId = Math.max(...notifications.map(like => like.id), 0) + 1;
    try {
      const { receiver_id, type, sender_id=authorizedUserId, seen=false, read=false } = req.body;
      const newNotification = {
        id: nextId,
        type,
        receiver_id,
        sender_id: sender_id,
        created_at: new Date().toString(),
        updated_at: new Date().toString(),
        seen,
        read,
        is_removed: false
      };
      notifications.push(newNotification);
      await notificationsDB.write();
      return {
        type: true,
        message: 'Created new notification',
        data: newNotification
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async seen(req, res) {
    try {
      const { notifications } = notificationsDB.data;
      const { notification_ids } = req.body;
      const newNotifications = notifications.map((obj) => {
        if (notification_ids.includes(obj.id)) {
          return { ...obj, seen: true };
        }
        return obj;
      });

      notificationsDB.data = { notifications: newNotifications };
      await notificationsDB.write();
      return {
        type: true,
        message: 'seen attributes of target notifications are updated'
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async read(req, res) {
    try {
      const { notifications } = notificationsDB.data;
      const { notification_ids } = req.body;
      const newNotifications = notifications.map((obj) => {
        if (notification_ids.includes(obj.id)) {
          return { ...obj, read: true };
        }
        return obj;
      });

      notificationsDB.data = { notifications: newNotifications };
      await notificationsDB.write();
      return {
        type: true,
        message: 'read attributes of target notifications are updated'
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async delete(req, res) {
    try {
      const { notifications } = notificationsDB.data;
      const { notification_ids } = req.body;
      const newNotifications = notifications.map((obj) => {
        if (notification_ids.includes(obj.id)) {
          return { ...obj, is_removed: true, updated_at: new Date().toString() };
        }
        return obj;
      });

      notificationsDB.data = { notifications: newNotifications };
      await notificationsDB.write();
      return {
        type: true,
        message: 'target notifications are removed'
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }
  
  static async friendship(req, res) {
    try {
      const { notifications } = notificationsDB.data;
      const { type, notification_id } = req.body;
      
      const targetNotificationIndex = notifications.findIndex((obj) => obj.id === notification_id);
      if (targetNotificationIndex === -1) {
        return {
          type: false,
          message: `Couldn't find notification with id ${notification_id}`
        };
      }

      //* accept friendship request
      if (type === FriendshipEnums.ACCEPT) {
        const receiver_id = notifications[targetNotificationIndex].sender_id;
        const resultForReceiverUser = await this.create({ body: { receiver_id, type: NotificationTypes.ACCEPTED_FRIENDSHIP_REQUEST } });
        const resultForSenderUser = await this.create({ body: { receiver_id: authorizedUserId, sender_id: receiver_id, seen: true, type: NotificationTypes.YOU_ARE_FRIEND_NOW } });
        if (!resultForReceiverUser.type || !resultForSenderUser.type) {
          return {
            type: false,
            message: 'Error occurs when creating a notification for sender and receiver user'
          };
        }

        const newNotificationResult = await this.getById({ params: { id: resultForSenderUser.data.id }});
        if (!newNotificationResult.type) {
          return {
            type: false,
            message: newNotificationResult.message,
          };
        }
        
        return {
          type: true,
          message: 'Friendship request is accepted',
          data: newNotificationResult.data 
        };
      }

      //* remove notification with id notification_id if it is accepted or rejected
      const deletingResult = await this.delete({ body: { notification_ids: [notification_id] } });
      if (!deletingResult.type) {
        return {
          type: false,
          message: deletingResult.message
        };
      }
      
      return {
        type: true,
        message: 'Friendship request is rejected'
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }
  
  static async addFriend(req, res) {
    try {
      const newNotificationResult = await this.create(req, res);

      if (!newNotificationResult.type) {
        return {
          type: false,
          message: newNotificationResult.message
        };
      }

      return {
        type: true,
        message: 'Friendship request has send'
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }
}

export default NotificationService;