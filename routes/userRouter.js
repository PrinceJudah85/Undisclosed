const { Router } = require('express');
const { User } = require('../models');
const { hashPassword, genToken, checkPassword, restrict } = require('../services/auth');

const userRouter = Router();

const buildAuthResponse = (user) => {
  const userData = {
    username: user.username,
    id: user.id,
  };

  const token = genToken(userData);

  return {
    user: userData,
    token,
  };
};

//set up route to get all users; return users

userRouter.post('/register', async (req, res, next) => {
  try {
    const password_digest = await hashPassword(req.body.password);
    const { username } = req.body;

    const user = await User.create({
      username,
      password_digest
    });
    //[TBU] user.save().then(() => {})
    const respData = buildAuthResponse(user);

    res.json(respData);
  } catch (e) {
    next(e);
  }
});

userRouter.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (await checkPassword(req.body.password, user.password_digest)) {
      const respData = buildAuthResponse(user);

      res.json(respData);
    } else {
      res.status(401).send('Invalid Credentials');
    }
  } catch (e) {
    next(e);
  }
});

userRouter.get('/verify', restrict, (req, res, next) => {
  const user = res.locals.user;
  res.json(user);
})

//To get the Admins image and city
userRouter.get('/', restrict, (req, res, next) => {
  const userImage = req.params.image_url;
  const userCity = req.params.city;
  res.json( userImage, userCity );
})

module.exports = userRouter