import { Sequelize } from 'sequelize';
import config from '.';

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
    host: config.DB_HOST,
    dialect: config.DB_SERVER,
});

export default sequelize;
