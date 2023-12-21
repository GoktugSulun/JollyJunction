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

      const token = jwt.sign(user, process.env?.VITE_TOKEN_SECRET, { expiresIn: '72h' });

      return {
        type: true,
        message: 'User log in successfully',
        data: { token }
      };
    } catch(error){
      return {
        type: false,
        message: error.message
      };
    }
  }

  static async register(req) {
    try {
      const { name, surname, email, password } = req.body;
      const { users } = usersDB.data;

      const isValidEmail = !users.find((obj) => obj.email === email);
      if (!isValidEmail) {
        return {
          type: false,
          message: 'This email has been already used'
        };
      }

      const nextId = Math.max(...users.map(like => like.id), 0) + 1;
      const newUser = {
        id: nextId,
        name,
        surname,
        email,
        password,
        location: '',
        city: '',
        country: '',
        school: '',
        img: '',
        company: '',
        position: '',
        social_medias: [],
        friends: [],
        created_at: new Date().toString(),
        updated_at: new Date().toString(),
      };

      users.push(newUser);
      await usersDB.write();
     
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