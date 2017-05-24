import Sequelize from 'sequelize';

const Comment = (sequelize) => sequelize.define('comments', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  user_id: Sequelize.INTEGER,
  post_id: Sequelize.INTEGER,
}, {
  tableName: 'comments',
  timestamps: true,
  underscored: true,
});

export default Comment;