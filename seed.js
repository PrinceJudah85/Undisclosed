const { User, Blog, Comment } = require('./models');

const main = async () => {
  //Delete everything in the database prior to seeding
  await User.destroy({
    where: {}
  });
  await Blog.destroy({
    where: {}
  });
  await Comment.destroy({
    where: {}
  });

  const admin = await User.create({
    username: "Admin",
    password_digest: "",
    image_url: Sequelize.TEXT,
    city: Sequelize.STRING
  })

  process.exit();
}

main();