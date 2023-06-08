import express from 'express';
import {
   getApplicationById,
   getApplications,
   createApplication,
   approveApplication,
   rejectApplication,
} from '../controllers/applicationController.js';

const applicationrouter = express.Router();

applicationrouter.get('/', getApplications);
applicationrouter.get('/detail/:id', getApplicationById);
applicationrouter.post('/send', createApplication);
applicationrouter.put('/approve/:id', approveApplication);
applicationrouter.delete('/reject/:id', rejectApplication);

export default applicationrouter;
