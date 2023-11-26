import { usersDB } from '../db/index.js';

let nextId = 1;
const { users } = usersDB.data;

class UserService {
  static async getAll() {
    try {
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
    const { id } = req.params;
    try {
      const user = users.find((obj) => obj.id === parseInt(id));
      if (!user) {
        return {
          type: false,
          message: `User with ${id} couldn't find`
        };
      }
      const { password, ...data } = user;
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
}
  
export default UserService;