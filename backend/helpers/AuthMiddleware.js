import jwt from 'jsonwebtoken';
import { usersDB } from '../index.js';

const AuthMiddleware = (req, res, next) => {
  const authHeader  = req.headers.authorization;
  const token = authHeader?.split?.(' ')?.[1];
 
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
 
  jwt.verify(token, process.env.VITE_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const { users } = usersDB.data;
    const doesUserExist = users.find((user) => user.id === decoded?.id)
    if (!doesUserExist) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    
    req.user = decoded;
    next();
  });
};

export default AuthMiddleware;