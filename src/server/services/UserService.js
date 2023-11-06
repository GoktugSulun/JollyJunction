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
      const data = users.find((obj) => obj.id === parseInt(id));
      return {
        type: !!data,
        message: data ? `User with ${id} id has been fetched` : `User with ${id} couldn't find`,
        ...(data ? { data } : {})
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