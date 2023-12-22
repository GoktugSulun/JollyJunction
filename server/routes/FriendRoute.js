import FriendController from '../controllers/FriendController.js';
import express from 'express';

const app = express();

app.get('/get', FriendController.get);
app.delete('/delete', FriendController.delete);

export default app;