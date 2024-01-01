import { advertisementsDB } from '../db/index.js';

class AdvertisementService {
  static async getAll() {
    try {
      const { advertisements } = advertisementsDB.data;

      return {
        type: true,
        message: 'Fetched advertisements',
        data: advertisements
      };
    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }
}

export default AdvertisementService;