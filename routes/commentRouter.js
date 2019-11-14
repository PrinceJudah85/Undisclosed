const { Router } = require('express');
const commentRouter = Router({mergeParams: true});
const { Comment, Blog } = require('../models.js')
const { restrict } = require('../services/auth')

commentRouter.route('/')
  .get(async (req, res, next) => {
    try {
      const comments = await Comment.findAll();
      res.json(comments);
    } catch (e) {
      next(e)
    }
  })
  .post(restrict, async (req, res, next) => {
    try {
      const comment = await Comment.create({ content: req.body.comment, userId: res.locals.user.id });
      const blog = await Blog.findByPk(req.params.blog_id)
      comment.setBlog(blog)
      const newComment = await Comment.findOne({
        where: {
          id: comment.id
        },
        include: 'blog'
      })
      res.json(newComment);
    } catch (e) {
      next(e)
    }
  })

commentRouter.route('/:id')
  .put(async (req, res, next) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      await comment.update(req.body)
      res.json(comment)
    } catch (e) {
      next(e)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const comment = await Comment.destroy({ where: { id: req.params.id } })
      res.json(comment)
    } catch (e) {
      next(e)
    }
  })

module.exports = commentRouter;