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
      res.status(200).json(application);
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
