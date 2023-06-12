import express from 'express';
import {
   getApplicationById,
   getApplications,
   createApplication,
   approveApplication,
   rejectApplication,
   getApplicationByStatusApproved,
   getApplicationByStatusRejected,
   getApplicationByStatusPending,
} from '../controllers/applicationController.js';

const applicationrouter = express.Router();

applicationrouter.get('/', getApplications);
applicationrouter.get('/detail/:id', getApplicationById);
applicationrouter.post('/send', createApplication);
applicationrouter.put('/approve/:id', approveApplication);
applicationrouter.put('/reject/:id', rejectApplication);
applicationrouter.get('/approved', getApplicationByStatusApproved);
applicationrouter.get('/rejected', getApplicationByStatusRejected);
applicationrouter.get('/pending', getApplicationByStatusPending);


export default applicationrouter;
