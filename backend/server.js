import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import PostRoute from './routes/PostRoute.js';
import UserRoute from './routes/UserRoute.js';
import InitRoute from './routes/InitRoute.js';
import NotificationRoute from './routes/NotificationRoute.js';
import FriendRoute from './routes/FriendRoute.js';
import CommentRoute from './routes/CommentRoute.js';
import AuthRoute from './routes/AuthRoute.js';
import AuthMiddleware from './helpers/AuthMiddleware.js';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.resolve();

export const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any domain
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => {
  res.json({
    type: true,
    message: 'Deployment is running'
  });
});

app.use(express.static(__dirname + '/files'));
app.use('/Auth', AuthRoute);
app.use('/Post', AuthMiddleware, PostRoute);
app.use('/User', AuthMiddleware, UserRoute);
app.use('/Init', AuthMiddleware, InitRoute);
app.use('/Notification',AuthMiddleware,  NotificationRoute);
app.use('/Friend', AuthMiddleware, FriendRoute);
app.use('/Comment', AuthMiddleware, CommentRoute);

app.use((req, res, next) => {
  next();
});

app.listen(PORT, () => {
  console.log('JSON app is running');
});