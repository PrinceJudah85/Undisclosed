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
    image_url: "https://i.imgur.com/c4Ybn2y.png",
    city: "New York City"
  })

  const princeJudah = await User.create({
    username: "PrinceJudah",
    password_digest: "$2b$11$LAVXEbn9yWmJkYy91ecpxev8N577JSPNnAPDS1pJmzK3S.HQraaku",
    image_url: "https://i.imgur.com/U1yqxBa.png",
    city: "New York City"
  })

  const nehemias = await User.create({
    username: "Nehemias",
    password_digest: "$2b$11$g9SiEyOWl9K9o4uQpX.LiefnWRx9Vx1686RpMTuPi4BILz1BJ2G22",
    image_url: "https://i.imgur.com/N3FXBTr.jpg",
    city: "New York City"
  })

  const mattMatt = await User.create({
    username: "mattMatt",
    password_digest: "$2b$11$qCrSQNgtLQdlJ0bQpo1mtO3xG0cC9Wtkxq5.7tUnoWBG2NA2QXwLi",
    image_url: "https://pbs.twimg.com/profile_images/854104214393548800/02f1lInb_400x400.jpg",
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

  const blog4 = await Blog.create({
    title: "West 4th 'The Cage' Basketball Courts",
    image_url: "https://i.pinimg.com/originals/53/f5/e0/53f5e0d24acac4f91fc7a68262fe6fde.jpg",
    content: "Also dubbed 'The Cage' this NYC public park located on west 4th in Greenwich Village attracts the best local basketball talent NYC has to offer. Get ready to wait a good while before you get next!",
    location: "West 4th Street in Greenwich Village"
  })

  const blog5 = await Blog.create({
    title: "Harlem’s Rucker Park",
    image_url: "https://untappedcities-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/Dyckman-Streetball-Harlem-NewYork-Untapped-Cities-Zach-Fleischer1-2.jpg",
    content: "If 'The Cage' on West 4th is known for attracting the best local talent, then Rucker Park is known for attracting the best nationwide talent.  Current and former pro basketball players such as Kobe Bryant, Vince Carter, Allen Iverson, and Kevin Durant have all played scrimmage games in this legendary park.  They tend to attract a big crowd during the Summer; so the next time you are in Harlem near 155th street, stop by and see if you can hold your own against the very best.’",
    location: "155th Street in Harlem"
  })

  const blog6 = await Blog.create({
    title: "Pelham Bay Park Monk Parakeets",
    image_url: "http://www.10000birds.com/wp-images/photogallery/pelhamparrots1.jpg",
    content: "Monk parakeets have made a sizable amount of Pelham Bay Park home. Legend has it that these birds ended up in the park after the truck carrying them tipped over on the Hutchinson River Parkway. Today they're the reason for attracting many incredulous tourists seeking to see, for themselves, a PARRATO colony in the Bronx of all places. You can find them near, and around, Rice stadium in Pelham Bay Park.",
    location: "Pelham Bay Park"
  })

  const blog7 = await Blog.create({
    title: "Longest Slide in NYC",
    image_url: "https://res.cloudinary.com/mommy-nearest/image/upload/c_fill,h_450,w_800/l9mr1jy408ivha30ylne.jpg",
    content: "Slide Hill is were you can find the longest slide in New York City. It's 57 feet long and three stories tall. Get there by getting on the ferry out of Manhattan from the Battery Maritime Building, or out of Brooklyn from Pier 6. Once on the island, follow the paths and signs until you arrive at Slide Hill.",
    location: "Governer's Island"
  })

  const blog8 = await Blog.create({
    title: "Station Musicians",
    image_url: "https://i.imgur.com/Lv93bSh.png",
    content: "This Brooklyn train station is one of the busiest stations out there. There are always many commuters taking the trains, people shopping in the Atlantic Terminal mall. Amidst them, there are people who go into the station to perform their musical acts. Sometimes, there are the usual boring  performances. However, there are music enthusiasts that have nice quality music once in a while.",
    location: "Atlantic Ave - Barclays Center Station"
  })

  const blog9 = await Blog.create({
    title: "Daizen Sushi Spot",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/FMgSWQQeV92wb37g1FA7YA/o.jpg",
    content: "Daizen is this Asian fusion restaurant that you wouldn’t really encounter walking through 8 Ave. It is located between two avenues in a narrow street. However, don’t judge on its appearance too quickly. This place has some really nice quality food that you wouldn’t expect from an all-you-can-eat buffet. Food such as, teriyaki, tempura, and all varieties of sushi can be found there.",
    location: "Daizen 768 57th St, Brooklyn"
  })

  // set associations here
  await mattMatt.setBlogs([blog8, blog9])
  await nehemias.setBlogs([blog6, blog7])
  await princeJudah.setBlogs([blog4, blog5])
  await admin.setBlogs([blog1, blog2, blog3])

  process.exit();
}

main();