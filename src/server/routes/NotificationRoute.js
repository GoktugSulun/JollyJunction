import NotificationController from '../controllers/NotificationController.js';
import express from 'express';

const app = express();


app.get('/get', NotificationController.get);
app.post('/friendship', NotificationController.friendship);
app.post('/addFriend', NotificationController.addFriend);
app.put('/seen', NotificationController.seen);
app.put('/read', NotificationController.read);
app.put('/cancel', NotificationController.cancel);
app.put('/acceptFriendship', NotificationController.acceptFriendship);
app.delete('/delete', NotificationController.delete);

export default app;