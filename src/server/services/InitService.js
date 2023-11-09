import { authorizedUserId } from '../server.js';
import NotificationService from './NotificationService.js';
import UserService from './UserService.js';

class InitService {
  static async get() {
    try {
      const authorizedUser = await UserService.getById({ params: { id: authorizedUserId }});
      const unseenNotifications = await NotificationService.get({ query: { is_removed: false, seen: false, receiver_id: authorizedUserId } });

      if (!authorizedUser.type || !unseenNotifications.type) {
        return {
          type: false,
          message: "Couldn't fetch init datas"
        };
      }
      
      const data = {
        authorizedUser: authorizedUser.data,
        unseenNotificationsCount: unseenNotifications.data.notifications.length
      };

      return {
        type: true,
        message: 'Fetched init datas',
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

export default InitService;