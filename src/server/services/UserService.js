import ResponseEnums from '../constants/Enums/ResponseEnums.js';
import { usersDB } from '../db/index.js';
import Helpers from '../helpers/Helpers.js';

let nextId = 1;
const { users } = usersDB.data;

class UserService {
  static async getAll(req, res) {
    try {
      Helpers.responseMessage(res, ResponseEnums.SUCCESS, 'Users has been fetched', users);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    try {
      const data = users.find((obj) => obj.id === parseInt(id));
      if (data) {
        Helpers.responseMessage(res, ResponseEnums.SUCCESS, `User with ${id} id has been fetched`, data);
      } else {
        Helpers.responseMessage(res, ResponseEnums.SUCCESS, `User with ${id} couldn't find`, {});
      }
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }

  static async create(req, res) {
    try {
      const data = req.body;
      data.id = nextId++;
      data.created_at = new Date().toString();
      data.updated_at = new Date().toString();
      users.push(data);
      await usersDB.write();
      Helpers.responseMessage(res, ResponseEnums.SUCCESS, 'User is created', data);
    } catch (error) {
      Helpers.responseMessage(res, ResponseEnums.FAILURE, error.message);
    }
  }
}
  
export default UserService;