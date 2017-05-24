import Sequelize from 'sequelize';

const User = (sequelize) => sequelize.define('user', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  encrypted_password: Sequelize.STRING,
}, {
  tableName: 'users',
  timestamps: true,
  underscored: true,
  instanceMethods: {
    //add methods for user
  },
  classMethods: {
    associate: function(models) {
      // associations can be defined here
    }
  },
  hooks: {
    beforeCreate: function(user) {
      //create hashing password here
    }
  }
});

export default User;
