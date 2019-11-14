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
    password_digest: "$2b$11$CGQv6rq8pcsZRNO2BMt15.MkfYP2IVk0IWpXn7OLwYjVkCwN6EEJy",
    image_url: "https://i.imgur.com/HZPz2tu.png",
    city: "New York City"
  })

  const blog1 = await Blog.create({
    title: "Bushwick Collective",
    image_url: "https://i2.wp.com/madhattersnyc.com/wp-content/uploads/2019/06/Urban-Ruben-Bushwick-Collective-2019-mural-1.jpeg?fit=660%2C496&ssl=1",
    content: "Ruben Ubiera, who uses the tag @urbanruben on his murals, was born in the Dominican Republic. He credits his move to the Bronx at the age of fifteen with exposing him to the world of graffiti. It’s been an influence on his work ever since, whether he’s working on murals or mixed-media pieces. Last year’s pitbull piece was one of the season’s biggest hits, but this year Ubiera took on a much beloved subject already well represented in Bushwick: Biggie Smalls.",
    location: "NYC"
  })

  const blog2 = await Blog.create({
    title: "Belvedere Castle",
    image_url: "https://i0.wp.com/www.nyconthecheap.com/wp-content/uploads/2018/02/Belvedere-Castle-Central-Park_shutterstock_sangaku.jpg?fit=3955%2C2635&ssl=1",
    content: "Belvedere Castle was designed by Frederick Law Olmsted and Calvert Vaux in 1867–1869. An architectural hybrid of Gothic and Romanesque styles, Vaux's design called for a Manhattan schist and granite structure with a corner tower with conical cap, with the existing lookout over parapet walls between them. Its name comes from belvedere, which means 'beautiful view' in Italian.",
    location: "NYC"
  })

  const blog3 = await Blog.create({
    title: "Apotheke Chinatown",
    image_url: "https://static01.nyt.com/images/2008/10/07/dining/apothke_650.1.jpg",
    content: "Inspired by the history and rise of the apothecary in Europe as well as the artistic influence of absinthe dens in 19th century Paris, Apotheke is the first of its kind. The entire experience from wandering down a hidden street to find the entrance, to tasting the first sip of a specialty cocktail made with exotic herbs and fruits – is a privilege.",
    location: "NYC"
  })

  // set associations here
  await admin.setBlogs([blog1, blog2, blog3])

  process.exit();
}

main();