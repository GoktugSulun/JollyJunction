import jwt from 'jsonwebtoken';

const AuthMiddleware = (req, res, next) => {
  const authHeader  = req.headers.authorization;
  const token = authHeader?.split?.(' ')?.[1];
 
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
 
  // Token doğrulama
  jwt.verify(token, process.env.VITE_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    req.user = decoded;
    next();
  });
};

export default AuthMiddleware;