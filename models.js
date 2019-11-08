// inside models.js
const { Sequelize } = require('sequelize');

// Create a variable that is a connection to the database.
const sequelize = new Sequelize({
  database: 'undisclosed_db',
  dialect: 'postgres',
  define: {
    underscored: true
  }
});


class User extends Sequelize.Model { }

User.init({
  username: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  image_url: Sequelize.TEXT,
  city: Sequelize.STRING
}, {
  sequelize,
  modelName: 'user'
});


class Blog extends Sequelize.Model { }

Blog.init({
  title: Sequelize.STRING,
  image_url: Sequelize.TEXT,
  content: Sequelize.TEXT,
  location: Sequelize.STRING
}, {
  sequelize,
  modelName: 'blog'
});

class Comment extends Sequelize.Model { }

Comment.init({
  content: Sequelize.STRING
}, {
  sequelize,
  modelName: 'comment'
});


//Associations[TBU]--for pending routes======
User.hasMany(Blog, { onDelete: 'cascade' });
Blog.belongsTo(User);

// [TBU] Double check with instructors========
Blog.hasMany(Comment, { onDelete: 'cascade' });
Comment.belongsTo(Blog);

module.exports = {
  Blog,
  User,
  Comment,
  sequelize
}