import Sequelize from 'sequelize';

const Post = (sequelize) => sequelize.define('posts', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  user_id: Sequelize.INTEGER,
}, {
  tableName: 'posts',
  timestamps: true,
  underscored: true,
});

export default Post;