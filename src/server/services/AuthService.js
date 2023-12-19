import { usersDB } from '../db';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class AuthService {
  static async login(req) {
    try {
      const { users } = usersDB.data;
      const { email, password } = req.body;
      
      const user = users.find((obj) => obj.email === email && obj.password === password);
      if (!user) {
        return {
          type: false,
          message: 'Email or password is wrong'
        };
      }

      const token = jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
      console.log(token, ' token');

      return {
        type: true,
        message: 'Fetched init datas',
      };
    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async register() {
    try {
      console.log('xxx');
     
      return {
        type: true,
        message: 'Your account has been created successfully',
      };
    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }
}

export default AuthService;