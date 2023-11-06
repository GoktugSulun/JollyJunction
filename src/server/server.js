import jsonServer from 'json-server';
import PostRoute from './routes/PostRoute.js';
import UserRoute from './routes/UserRoute.js';
import InitRoute from './routes/InitRoute.js';
import NotificationRoute from './routes/NotificationRoute.js';

export const authorizedUserId = 2;
export const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/health', (req, res) => {
  res.json({
    type: true,
    message: 'Deployment is running'
  });
});

server.use('/Post', PostRoute);
server.use('/User', UserRoute);
server.use('/Init', InitRoute);
server.use('/Notification', NotificationRoute);

server.use((req, res, next) => {
  next();
});

server.listen(3000, () => {
  console.log('JSON Server is running');
});