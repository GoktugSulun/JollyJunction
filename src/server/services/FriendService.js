import { friendsDB } from '../db/index.js';

class FriendService {
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