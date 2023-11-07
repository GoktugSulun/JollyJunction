import jsonServer from 'json-server';
import NotificationController from '../controllers/NotificationController.js';

const server = jsonServer.create();

server.get('/get', NotificationController.get);
server.put('/seen', NotificationController.seen);
server.put('/read', NotificationController.read);
server.delete('/delete', NotificationController.delete);

export default server;