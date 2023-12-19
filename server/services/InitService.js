import AdvertisementService from './AdvertisementService.js';
import NotificationService from './NotificationService.js';
import UserService from './UserService.js';

class InitService {
  static async get(req) {
    try {
      const authorizedUser = await UserService.getById({ ...req, params: { id: req.user.id }});
      const unseenNotifications = await NotificationService.get({ ...req, query: { is_removed: false, seen: false, receiver_id: req.user.id } });
      const advertisements = await AdvertisementService.getAll(req);

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