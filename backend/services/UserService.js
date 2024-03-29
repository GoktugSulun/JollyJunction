import { friendsDB, usersDB } from '../index.js';
import { canBeFriendHandler } from './PostService.js';

class UserService {
  static async getAll() {
    try {
      const { users } = usersDB.data;
      return {
        type: true,
        message: 'Users has been fetched',
        data: users
      };
    } catch (error) {
      return {
        type: false,
        message: error.message,
      };
    }
  }

  static async getById(req) {
    try {
      const { id } = req.params;
      const { users } = usersDB.data;
      const { friends } = friendsDB.data;
      const user = users.find((obj) => obj.id === parseInt(id));
      if (!user) {
        return {
          type: false,
          message: `User with ${id} couldn't find`
        };
      }
      // const { password, ...data } = user;
      const userFriends = friends.find((obj) => obj.user_id === id)?.friends || [];     
      const data = { ...user, friends: userFriends, canBeFriend: canBeFriendHandler(user.id, req.user.id) };
      return {
        type: true,
        message: `User with ${id} id has been fetched`,
        data
      };
    } catch (error) {
      return {
        type: false,
        message: error.message,
      };
    }
  }

  static async create(req) {
    try {
      const { users } = usersDB.data;
      let nextId = Math.max(...users.map(like => like.id), 0) + 1;
      const data = req.body;
      data.id = nextId++;
      data.created_at = new Date().toString();
      data.updated_at = new Date().toString();
      users.push(data);
      await usersDB.write();
      return {
        type: true,
        message: 'User is created',
        data
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }
  
  static async edit(req) {
    try {
      const { users } = usersDB.data;
      const { id } = req.params;
      const { is_file_deleted, ...data } = req.file ? JSON.parse(req.body.data) : req.body;
      
      const targetIndex = users.findIndex((obj) => obj.id === parseInt(id));
      if (targetIndex === -1) {
        return {
          type: false,
          message: `User with id ${id} couldn't find.`,
        };
      }

      const [name, type] = req.file?.filename?.split('.') || [];

      console.log(data, ' data');
      const newData = { 
        ...users[targetIndex], 
        ...data, 
        updated_at: new Date().toString(), 
        ...(req.file 
          ? { img: { name, type } } 
          : is_file_deleted 
            ? { img: '' }
            : {}
        )
      };
      console.log(newData, ' new data');
      users.splice(targetIndex, 1, newData);
      await usersDB.write();

      const user = await UserService.getById({ ...req, params: { id } });
      if (!user.type) {
        return {
          type: false,
          message: user.message
        };
      }

      return {
        type: true,
        message: 'User is updated',
        data: user.data 
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async patch(req) {
    try {
      const { users } = usersDB.data;

      const index = users.findIndex((obj) => obj.id === req.user.id);
      if (index === -1) {
        return {
          type: false,
          message: 'User not found'
        };
      }

      const newUserData = {
        ...users[index],
        ...req.body
      };
      users.splice(index, 1, newUserData);
      await usersDB.write();

      return {
        type: true,
        message: 'User info has been updated',
      };
    } catch (error) {
      return {
        type: false,
        message: error.message
      };
    }
  }
}
  
export default UserService;