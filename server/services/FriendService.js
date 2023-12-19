import { friendsDB } from '../db/index.js';
import UserService from './UserService.js';

class FriendService {
  static async get(req, res) {
    try {
      const { friends } = friendsDB.data;
      const { user_id, page = 1, limit = 10, is_removed } = req.query;

      const data = friends.find((obj) => obj.user_id === parseInt(user_id));
      if (!data) {
        return {
          type: true,
          message: 'Fetched friends',
          data: []
        };
      }

      const filteredData = data.friends.filter((obj) => {
        return Object.entries({ is_removed }).every(([key, value]) => {
          return value !== undefined ? String(obj[key]) === value : true;
        });
      });

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit; 
      const slicedData = filteredData.slice(startIndex, endIndex);
      const friendResults = await Promise.all(slicedData.map((obj) => UserService.getById({ params: { id: obj.friend_id } })));
      if (friendResults.some((i) => !i.type)) {
        return {
          type: false,
          message: "Some or multiple user couldn't find"
        };
      }

      const result = friendResults.map((obj) => obj.data);

      return {
        type: true,
        message: 'Fetch friend',
        data: result
      };
    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async delete(req, res) {
    try {
      const { friends } = friendsDB.data;
      const { user_id, friend_id } = req.query;

      const userIndex = friends.findIndex((obj) => obj.user_id === parseInt(user_id));
      const friendIndex = friends.findIndex((obj) => obj.user_id === parseInt(friend_id));
      if (userIndex === -1 || friendIndex === -1) {
        return {
          type: false,
          message: `There is no user with id ${user_id} or ${friend_id} || he/she doesn't have any friend`
        };
      }

      const userData = {
        ...friends[userIndex],
        friends: friends[userIndex].friends.map((obj) => {
          if (obj.friend_id === parseInt(friend_id)) {
            return {
              ...obj,
              is_removed: true,
              updated_at: new Date().toString()
            };
          }
          return obj;
        })
      };
      console.log(userIndex, ' bu index için => yeni data', userData);
      friends.splice(userIndex, 1, userData);

      const friendData = {
        ...friends[friendIndex],
        friends: friends[friendIndex].friends.map((obj) => {
          if (obj.friend_id === parseInt(user_id)) {
            return {
              ...obj,
              is_removed: true,
              updated_at: new Date().toString()
            };
          }
          return obj;
        })
      };
      console.log(friendIndex, ' bu index için => yeni data', friendData);
      friends.splice(friendIndex, 1, friendData);


      await friendsDB.write();
      
      return {
        type: true,
        message: 'Friend is removed'
      };
    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async create(req, res) {
    try {
      const { friends } = friendsDB.data;
      const nextId = Math.max(...friends.map(friend => friend.id), 0) + 1;
      const { user_id, friend_id } = req.body;

      const targetIndex = friends.findIndex((obj) => obj.user_id === user_id);
      if (targetIndex === -1) {
        const data = {
          id: nextId,
          user_id,
          friends: [{ friend_id, created_at: new Date().toString(), updated_at: new Date().toString(), is_removed: false }]
        };
        friends.push(data);
      } else {
        const data = {
          ...friends[targetIndex],
          friends: [
            ...friends[targetIndex].friends, 
            { friend_id, created_at: new Date().toString(), updated_at: new Date().toString(), is_removed: false }
          ]
        };
        friends.splice(targetIndex, 1, data);
      }

      await friendsDB.write();
      return {
        type: true,
        message: 'Friend is created'
      };
    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }
}

export default FriendService;