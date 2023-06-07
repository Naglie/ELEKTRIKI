import db from '../config/database.js'
import { DataTypes, Model } from 'sequelize';

class Admin extends Model {}
Admin.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      refresh_token: DataTypes.TEXT,
   },
   {
      sequelize: db,
      modelName: 'admin',
      freezeTableName: true,
      tableName: 'admin',
      timestamps: false,
   }
);

export default Admin;
