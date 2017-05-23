
## Database setup

1. Install mysql
2. Login to mysql shell
```mysql -u root```
3. Create database
```CREATE exampleDB;
```
4. Create user with privileges to database
```CREATE USER 'exampleUser'@'127.0.0.1' IDENTIFIED by 'abcd';
```GRANT ALL PRIVILEGES on exampleDB.* TO  'exampleUser'@'127.0.0.1';
```FLUSH PRIVILEGES```
```quit```

5. Sign in with user
```mysql -u exampleUser -h 127.0.0.1 exampleDB -p 
enter password
```logged in user with access to exampleDB databaser
