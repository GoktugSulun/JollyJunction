import FriendshipEnums from '../constants/Enums/FriendshipEnums.js';
import NotificationEnums from '../constants/Enums/NotificationEnums.js';
import { notificationsDB } from '../index.js';
import FriendService from './FriendService.js';
import UserService from './UserService.js';

const getUser = async (req, id) => {
  const user = await UserService.getById({ ...req, params: { id }});
  if (!user.type) {
    return null;
  }
  return user.data;
};

class NotificationService {
  static async get(req) {
    try {
      const { notifications } = notificationsDB.data;
      const { sender_id, receiver_id, type, is_removed, seen, read, page, limit } = req.query;
      const condition = (data) => ({
        ...(is_removed !== undefined ? { is_removed: data.is_removed === JSON.parse(is_removed) } : {}),
        ...(seen !== undefined ? { seen: data.seen === JSON.parse(seen) } : {}),
        ...(read !== undefined ? { read: data.read === JSON.parse(read) } : {}),
        ...(receiver_id !== undefined ? { receiver_id: data.receiver_id === parseInt(receiver_id) } : {}),
        ...(sender_id !== undefined ? { sender_id: data.sender_id === parseInt(sender_id) } : {}),
        ...(type !== undefined ? { type: data.type === parseInt(type) } : {})
      });
      const data = notifications.filter((obj) => Object.values(condition(obj)).every(Boolean));
      const sortedData = [...data];
      sortedData.sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()); 
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit; 
      const dataSlice = page ? sortedData.slice(startIndex, endIndex) : [...sortedData];

      const result = await Promise.all(dataSlice.map(async (obj) => {
        try {
          const receiver_user = await getUser(req, obj.receiver_id);
          const sender_user = await getUser(req, obj.sender_id);
        
          return {
            ...obj,
            receiver_user,
            sender_user
          };
        } catch (error) {
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
      const data = notifications.find((obj) => obj.id === id);

      if (!data) {
        return {
          type: false,
          message: `Couldn't find notification with id ${id}`
        };
      }

      const receiver_user = await getUser(req, data.receiver_id);
      const sender_user = await getUser(req, data.sender_id);
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
      const { receiver_id, type, sender_id=req.user.id, post_id=null, seen=false, read=false } = req.body;
      const newNotification = {
        id: nextId,
        type,
        receiver_id,
        sender_id,
        post_id,
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
      const { id: authorizedUserId } = req.user;
      const { notifications } = notificationsDB.data;
      const { type, notification_id, seen=true } = req.body;
      
      const targetNotificationIndex = notifications.findIndex((obj) => obj.id === notification_id);
      if (targetNotificationIndex === -1) {
        return {
          type: false,
          message: `Couldn't find notification with id ${notification_id}`
        };
      }

      //* remove notification with id notification_id if it is accepted or rejected
      const deletingResult = await this.delete({ ...req, body: { notification_ids: [notification_id] } });
      if (!deletingResult.type) {
        return {
          type: false,
          message: deletingResult.message
        };
      }

      //* accept friendship request
      if (type === FriendshipEnums.ACCEPT) {
        const receiver_id = notifications[targetNotificationIndex].sender_id;
        const resultForReceiverUser = await this.create({ ...req, body: { receiver_id, type: NotificationEnums.ACCEPTED_FRIENDSHIP_REQUEST } });
        const resultForSenderUser = await this.create({ ...req, body: { receiver_id: authorizedUserId, sender_id: receiver_id, seen, type: NotificationEnums.YOU_ARE_FRIEND_NOW } });
        if (!resultForReceiverUser.type || !resultForSenderUser.type) {
          return {
            type: false,
            message: 'Error occurs when creating a notification for sender and receiver user'
          };
        }

        const friendResults = await Promise.all([
          FriendService.create({ ...req, body: { user_id: receiver_id, friend_id: authorizedUserId } }), 
          FriendService.create({ ...req, body: { user_id: authorizedUserId, friend_id: receiver_id  } })
        ]);
        if (friendResults.some((i) => !i)) {
          return {
            type: false,
            message: friendResults.message,
          };
        }

        const newNotificationResult = await this.getById({ ...req, params: { id: resultForSenderUser.data.id }});
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

  static async cancel(req, res) {
    try {
      const { receiver_id, type } = req.body;
      const targetNotification = await this.get({ ...req, query: { receiver_id, sender_id: req.user.id, type, is_removed: false } });

      if (!targetNotification.type) {
        return {
          type: false,
          message: "Couldn't find notification in cancel service"
        };
      }

      const deletingResult = await this.delete({ ...req, body: { notification_ids: [targetNotification.data.notifications[0].id] } });
      if (!deletingResult.type) {
        return {
          type: false,
          message: deletingResult.message
        };
      }

      return {
        type: true,
        message: 'Friendship request has cancelled'
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async acceptFriendship(req, res) {
    try {
      const { sender_id } = req.body;
      const targetNotification = await this.get({ ...req, query: { sender_id, receiver_id: req.user.id, type: NotificationEnums.REQUEST_FOR_FRIENDSHIP, is_removed: false } });
      if (!targetNotification.type) {
        return {
          type: false,
          message: targetNotification.message
        };
      }

      const friendshipResult = await this.friendship({ ...req, body: { type: FriendshipEnums.ACCEPT, notification_id: targetNotification.data.notifications[0].id, seen: false } });
      if (!friendshipResult.type) {
        return {
          type: false,
          message: friendshipResult.message
        };
      }
      
      return {
        type: true,
        message: 'Friendship request is accepted'
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async rejectFriendship(req, res) {
    try {
      const { sender_id } = req.body;
      const targetNotification = await this.get({ ...req, query: { sender_id, receiver_id: req.user.id, type: NotificationEnums.REQUEST_FOR_FRIENDSHIP, is_removed: false } });
      if (!targetNotification.type) {
        return {
          type: false,
          message: targetNotification.message
        };
      }

      const friendshipResult = await this.friendship({ ...req, body: { type: FriendshipEnums.REJECT, notification_id: targetNotification.data.notifications[0].id, seen: false } });
      if (!friendshipResult.type) {
        return {
          type: false,
          message: friendshipResult.message
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
}

export default NotificationService;