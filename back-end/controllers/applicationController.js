import Application from '../models/application.js';

export const getApplications = async (req, res) => {
   try {
      const applications = await Application.findAll();
      res.status(200).json(applications);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const getApplicationById = async (req, res) => {
   try {
      const application = await Application.findAll({
         where: {
            id: req.params.id,
         },
      });
      res.json(application[0]);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const createApplication = async (req, res) => {
   try {
      await Application.create(req.body);
      res.json({
         message: 'Application created successfully',
      });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const approveApplication = async (req, res) => {
   try {
      await Application.update(
         { approved: 'Принято' },
         {
            where: {
               id: req.params.id,
            },
         }
      );
      res.json({
         message: 'Application approved successfully',
      });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const rejectApplication = async (req, res) => {
   try {
      await Application.update(
         { approved: 'Отклонено' },
         {
            where: {
               id: req.params.id,
            },
         }
      );
      res.json({
         message: 'Application rejected successfully',
      });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const getApplicationByStatusApproved = async (req, res) => {
   try {
      const application = await Application.findAll({
         where: {
            approved: 'Принято',
         },
      });
      res.json(application);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const getApplicationByStatusRejected = async (req, res) => {
   try {
      const application = await Application.findAll({
         where: {
            approved: 'Отклонено',
         },
      });
      res.json(application);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const getApplicationByStatusPending = async (req, res) => {
   try {
      const application = await Application.findAll({
         where: {
            approved: 'На рассмотрении',
         },
      });
      res.json(application);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};