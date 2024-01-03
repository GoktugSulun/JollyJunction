import express from 'express';
import AuthController from '../controllers/AuthController.js';

const app = express();

app.post('/login', AuthController.login);
app.post('/register', AuthController.register);

export default app;