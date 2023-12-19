import { usersDB } from '../db/index.js';
import jwt from 'jsonwebtoken';

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

      const token = jwt.sign(user, process.env?.VITE_TOKEN_SECRET, { expiresIn: '1800s' });

      return {
        type: true,
        message: 'Fetched init datas',
        data: { token }
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