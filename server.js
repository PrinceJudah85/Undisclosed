const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const { User } = require('./models.js')

const userRouter = require('./routes/userRouter.js')
const commentRouter = require('./routes/commentRouter.js')
const blogRouter = require('./routes/blogRouter.js')
const userBlogRouter = require('./routes/userBlogRouter.js')

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/blogs', blogRouter);
app.use('/users/:user_id/blogs', userBlogRouter);
app.use('/blogs/:blog_id/comments', commentRouter);




app.listen(PORT, () => console.log(`up on port ${PORT}`))