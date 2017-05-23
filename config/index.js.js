'use strict';

let config = {};

config.port = process.env.PORT || 8080;
config.username = 'exampleUser';
config.password = 'abcd';
config.database = 'exampleDB';
config.host = '127.0.0.1';
config.dialect = 'mysql';

export default config;