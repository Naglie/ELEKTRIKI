import { Sequelize } from 'sequelize';

const db = new Sequelize('ivkhk_elektriki', 'root', '', {
   host: 'localhost',
   dialect: 'mysql',
});

export default db;
