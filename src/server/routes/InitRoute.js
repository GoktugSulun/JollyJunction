import InitController from '../controllers/InitController.js';
import express from 'express';

const app = express();

app.get('/get', InitController.get);

export default app;