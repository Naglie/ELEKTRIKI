import express from 'express';
import { Login, Logout, getAdmin } from '../controllers/adminController.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { refreshToken } from '../controllers/refreshToken.js';

const adminrouter = express.Router();

adminrouter.post('/login', Login);
adminrouter.get('/refresh', verifyToken, getAdmin);
adminrouter.get('/token', refreshToken);
adminrouter.delete('/logout', Logout);

export default adminrouter;
