const { Router } = require('express');
const { User } = require('../models');
const { hashPassword, genToken, checkPassword, restrict } = require('../services/auth');

const userRouter = Router();

const buildAuthResponse = (user) => {
  const userData = {
    username: user.username,
    id: user.id,
    image_url: user.image_url,
    city: user.city
  };

  const token = genToken(userData);

  return {
    user: userData,
    token,
  };
};


userRouter.post('/register', async (req, res, next) => {
  try {
    const password_digest = await hashPassword(req.body.password);
    const { username } = req.body;
    const { city } = req.body

    const user = await User.create({
      username,
      password_digest,
      city
    });

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

userRouter.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body)
    res.json(user)
  } catch (e) {
    next(e)
  }
})

userRouter.get('/verify', restrict, async (req, res, next) => {
  console.log("hello")
  const user = await User.findByPk(res.locals.user.id);
  res.json(user);
})

module.exports = userRouter