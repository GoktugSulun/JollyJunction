import { friendsDB } from '../db/index.js';
import UserService from './UserService.js';

class FriendService {
  static async get(req, res) {
    try {
      const { friends } = friendsDB.data;
      const { user_id } = req.query;

      const data = friends.find((obj) => obj.user_id === parseInt(user_id));
      if (!data) {
        return {
          type: true,
          message: 'Fetched friends',
          data: []
        };
      }
      
      const friendResults = await Promise.all(data.friends.map((id) => UserService.getById({ params: { id } })));
      if (friendResults.some((i) => !i.type)) {
        return {
          type: false,
          message: "Some or multiple user couldn't find"
        };
      }
      const results = friendResults.map((obj) => obj.data);

      return {
        type: true,
        message: 'Fetch friend',
        data: results
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
        friends: friends[userIndex].friends.filter((id) => id !== parseInt(friend_id))
      };
      friends.splice(userIndex, 1, userData);

      const friendData = {
        ...friends[friendIndex],
        friends: friends[friendIndex].friends.filter((id) => id !== parseInt(user_id))
      };
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
          friends: [friend_id]
        };
        friends.push(data);
      } else {
        const data = {
          ...friends[targetIndex],
          friends: [...friends[targetIndex].friends, friend_id]
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