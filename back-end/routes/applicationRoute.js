import express from 'express';
import {
   getApplicationById,
   getApplications,
   createApplication,
   approveApplication,
} from '../controllers/applicationController.js';

const applicationrouter = express.Router();

applicationrouter.get('/', getApplications);
applicationrouter.get('/:id', getApplicationById);
applicationrouter.post('/send', createApplication);
applicationrouter.put('/:id', approveApplication);

export default applicationrouter;
