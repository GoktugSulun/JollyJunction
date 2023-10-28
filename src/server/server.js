import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

server.post('/createPost', (req, res) => {
  console.log('CREATE POST !!!!!!!!!!!');
  const newPost = req.body;
  console.log(newPost, ' newPost');
  router.db.get('posts').push(newPost).write();
  res.jsonp(req.query);
});

server.use((req, res, next) => {
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});