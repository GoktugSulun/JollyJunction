import jsonServer from 'json-server';
import PostRoute from './routes/PostRoute.js';

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

server.use((req, res, next) => {
  next();
});

server.listen(3000, () => {
  console.log('JSON Server is running');
});