import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';

class Application extends Model {}
Application.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      id_code: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      education: DataTypes.ENUM('Среднее', 'Среднее специальное', 'Высшее'),
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      approved: DataTypes.ENUM('Принято', 'Отклонено', 'На рассмотрении'),
      courses: DataTypes.ENUM(
         'Электрик внутренних работ, 2 года',
         'Электрик внутренних работ, 3 года'
      ),
   },
   {
      sequelize: db,
      modelName: 'application',
      tableName: 'applications',
      timestamps: false,
   }
);

export default Application;
