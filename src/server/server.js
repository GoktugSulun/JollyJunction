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
import path from 'path';

const __dirname = path.resolve();

export const authorizedUserId = 1;
export const app = express();
const PORT = 3000;

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
app.use('/Post', PostRoute);
app.use('/User', UserRoute);
app.use('/Init', InitRoute);
app.use('/Notification', NotificationRoute);
app.use('/Friend', FriendRoute);
app.use('/Comment', CommentRoute);

app.use((req, res, next) => {
  next();
});

app.listen(PORT, () => {
  console.log('JSON app is running');
});