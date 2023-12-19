import { authorizedUserId } from '../server.js';
import AdvertisementService from './AdvertisementService.js';
import NotificationService from './NotificationService.js';
import UserService from './UserService.js';

class InitService {
  static async get() {
    try {
      const authorizedUser = await UserService.getById({ params: { id: authorizedUserId }});
      const unseenNotifications = await NotificationService.get({ query: { is_removed: false, seen: false, receiver_id: authorizedUserId } });
      const advertisements = await AdvertisementService.getAll();

      if (!authorizedUser.type || !unseenNotifications.type || !advertisements.type) {
        return {
          type: false,
          message: "Couldn't fetch init datas"
        };
      }
      
      const data = {
        authorizedUser: authorizedUser.data,
        unseenNotificationsCount: unseenNotifications.data.notifications.length,
        advertisements: advertisements.data
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