'use strict';

let config = {};

/*
log into mysql shell via command
mysql -u exampleUser -h 127.0.0.1 exampleDB -p 
//enter password
*/
config.port = process.env.PORT || 8080;
config.username = 'exampleUser';
config.password = 'abcd';
config.database = 'exampleDB';
config.host = '127.0.0.1';
config.dialect = 'mysql';

export default config;
