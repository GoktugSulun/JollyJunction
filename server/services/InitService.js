import AdvertisementService from './AdvertisementService.js';
import NotificationService from './NotificationService.js';
import UserService from './UserService.js';

const desriptionForMissingInformations = {
  img: {
    title: 'Profile Image',
    description: 'A picture is worth a thousand words! Show yourself and introduce yourself to other users with your profile photo'
  },
  position: {
    title: 'Position',
    description: 'Share with us what position you work in. Maybe you can connect with other users working in the same field! Example: Doctor, Frontend Developer, Math teacher,...'
  },
  city: {
    title: 'Location',
    description: 'Which city do you live in? This can make it easier for you to connect with users around you. Example: Istanbul, Ankara, Edirne,..'
  },
  school: {
    title: 'School',
    description: 'If you are studying at university or have studied, share it with us. This way, we can help you reach people who studied or graduated from the same university as you. Example: BAU, İTÜ, ODTÜ,...'
  }
};

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
        advertisements: advertisements.data,
        missingProfile: {}
      };

      if (!authorizedUser.data.dont_show_again) {
        const missingInfos = Object.entries(desriptionForMissingInformations).filter(([key]) => !authorizedUser.data[key]);
        const missingProfile = Object.fromEntries(missingInfos);
        data.missingProfile = missingProfile;
      }
      
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