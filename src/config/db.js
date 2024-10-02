import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('todo_list', null, null, {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            trustedConnection: true,  // Para usar Windows Authentication
        }
    }
});

export default sequelize;