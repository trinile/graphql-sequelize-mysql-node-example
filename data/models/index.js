//create connection to mysql
import { database, username, password, host, dialect } from '../../config';

const sequelize = new Sequelize(database, username, password, {
  host: host, 
  dialect: dialect,
  pool: {
    max: 5, 
    min: 0,
    idle: 10000,
  }
};

//test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successly');
  })
  .catch(err => {
    console.error('Unable to connect to database: ', err);
  });

export sequelize;
  