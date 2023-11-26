import jsonServer from 'json-server';
import FriendController from '../controllers/FriendController.js';

const server = jsonServer.create();

server.get('/get', FriendController.get);
server.delete('/delete', FriendController.delete);

export default server;