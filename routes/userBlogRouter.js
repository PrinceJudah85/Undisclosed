const { Router } = require('express');
const userBlogRouter = Router({mergeParams: true});
const { Blog } = require('../models.js')
const { restrict } = require('../services/auth')

userBlogRouter.route('/')
  .get(async (req, res, next) => {
    try {
      const user_id = req.params.user_id
      const blogs = await Blog.findAll({
        where: {
        user_id
      }});
      res.json(blogs);
    } catch (e) {
      next(e)
    }
  })
  
  .post(restrict, async (req, res, next) => {
    try {
      const user_id = req.params.user_id
      const data = req.body
      const user = await User.findAll(user_id)
      const blog = await Blog.create(data)
      await blog.setUser(user)
      res.json(blog);
    } catch (e) {
      next(e)
    }
  })

userBlogRouter.route('/:id')
  .get(async (req, res, next) => {
    try {
      const id = req.params.id;
      const blog = await Blog.findByPk(id);
      res.json(blog);
    } catch (e) {
      next(e)
    }
  })
  .put(async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const blog = await Blog.findByPk(id);
      await blog.update(data)
      res.json(blog)
    } catch (e) {
      next(e)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const id = req.params.id;
      const blog = await Blog.findByPk(id)
      await blog.destroy()
      res.json(blog)
    } catch (e) {
      next(e)
    }
  })

module.exports = userBlogRouter;