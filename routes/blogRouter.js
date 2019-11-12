const { Router } = require('express');
const blogRouter = Router();
const { User,Blog } = require('../models.js')
const { restrict } = require('../services/auth')

//======SHOWS ALL BLOGS==========
blogRouter.route('/')
  .get(async (req, res, next) => {
    try {
      const blogs = await Blog.findAll();
      res.json(blogs);
    } catch (e) {
      next(e)
    }
  })
  
  .post(restrict, async (req, res, next) => {
    try {
      const blog = await Blog.create({ ...req.body, userId: res.locals.user.id });
      res.json(blog);
    } catch (e) {
      next(e)
    }
  })

blogRouter.route('/:id')
  .get(async (req, res, next) => {
    try {
      const blog = await Blog.findByPk(req.params.id);
      res.json(blog);
    } catch (e) {
      next(e)
    }
  })
  .put(async (req, res, next) => {
    try {
      const blog = await Blog.findByPk(req.params.id);
      await blog.update(req.body)
      res.json(blog)
    } catch (e) {
      next(e)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const blog = await Blog.destroy({ where: { id: req.params.id } })
      res.json(blog)
    } catch (e) {
      next(e)
    }
  })

module.exports = blogRouter;