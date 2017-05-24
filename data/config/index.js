'use strict';

let config = {};

/*
log into mysql shell via command
mysql -u exampleUser -h 127.0.0.1 exampleDB -p 
//enter password
*/

config.PORT = process.env.port || 8080;
config.env = process.env.NODE_ENV || 'development';
config.DB_USER = 'exampleUser';
config.DB_PASSWORD = 'abcd';
config.DB_NAME = 'exampleDB';
config.DB_HOST = '127.0.0.1';
config.DB_DIALECT = 'mysql';

export default config;
