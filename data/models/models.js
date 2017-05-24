import UserModel from './user';
import PostModel from './post';
import CommentModel from './comment';

import Sequelize from 'sequelize';
import config from '../config';

import casual from 'casual';
import _ from 'lodash';

/*
log into mysql shell via command
mysql -u exampleUser -h 127.0.0.1 exampleDB -p 
//enter password
*/

const DB_NAME = config.DB_NAME;
const DB_USER = config.DB_USER;
const DB_PASSWORD = config.DB_PASSWORD;
const DB_HOST = config.DB_HOST;
const DB_DIALECT = config.DB_DIALECT;

console.log(`SQL_HOST is ${DB_HOST}, SQL_DB is ${DB_NAME}`);
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

export const User = UserModel(sequelize);
export const Post = PostModel(sequelize);
export const Comment = CommentModel(sequelize);

User.Post = User.hasMany(Post, {
  as: 'posts',
});
Post.User = Post.belongsTo(User, {
  as: 'user',
});
User.Comment = User.hasMany(Comment, {
  as: 'comments',
});
Comment.User = Comment.belongsTo(User, {
  as: 'user',
  // foreignKey: 'user_id',
});
Comment.Post = Comment.belongsTo(Post, {
  as: 'post',
  // foreignKey: 'post_id',
});
Post.Comment = Post.hasMany(Comment, {
  as: 'comments',
  // foreignKey: 'comment_id',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize
  .sync({ force: true })
  .then(() => {
    //TODO: move this logic into seeding folder
    //TODO: SEED WITH COMMENTS
    _.times(10, () => {
      return User.create({
        first_name: casual.first_name,
        last_name: casual.last_name,
        username: casual.username,
        encrypted_password: casual.password,
        email: casual.email,
        created_at: Date.now(),
        updated_at: Date.now(),
      }).then(user => {
        return user.createPost({
          title: `${casual.title} by ${user.first_name}`,
          content: casual.sentence,
          created_at: Date.now(),
          updated_at: Date.now(),
        });
      });
    });
    console.log('created tables from schema, dropping even if they exist')
  });
export default sequelize;
