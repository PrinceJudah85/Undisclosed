import React from 'react';
import { Link } from 'react-router-dom';
import { getAllComments, postComment, deleteComment, getOneBlog } from '../services/api-helper';
import CommentList from './CommentList';
import CreateComments from './CreateComments';


export default class FullBlog extends React.Component {
  state = {
    comments: [],
    oneBlog: null
  }

  async componentDidMount() {
    const comments = await getAllComments(this.props.id);
    const oneBlog = await getOneBlog(this.props.id);
    this.setState({
      comments: comments,
      oneBlog: oneBlog
    })
  }

  createComment = async (blog_id, commentData) => {
    const newComment = await postComment(blog_id, commentData);
    this.setState(prevState => ({
      comments: [...prevState.comments, newComment],
    }))
  }

  destroyComment = async (blog_id, comment_id) => {
    await deleteComment(blog_id, comment_id);
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => {
        return comment.id !== comment_id
      })
    }))
  }

  render() {
    return (
      <>
        {
          this.state.oneBlog &&
          <div id={this.state.oneBlog.id} className='full-blog-page'>
            <h2 className="blog-title">{this.state.oneBlog.title}</h2>
            <div className='full-blog-img'>
              <img src={this.state.oneBlog.image_url} alt="blog location" />
            </div>
            <h3>Author: <Link to={`/user_blogs/${this.state.oneBlog.userId}`}>{this.state.oneBlog.user.username}</Link></h3>
            <h3>{this.state.oneBlog.location}</h3>
            <p>{this.state.oneBlog.content}</p>
            <CreateComments createComment={this.createComment} blog_id={this.state.oneBlog.id} />
            <CommentList destroyComment={this.destroyComment} comments={this.props.comments} blog_id={this.state.oneBlog.id} />
            {this.state.oneBlog.userId === this.props.currentUser.id ? <button id={this.state.oneBlog.id} onClick={this.props.handleDelete}>Delete</button> : null}
            {this.state.oneBlog.userId === this.props.currentUser.id ? <Link to={`/edit/${this.state.oneBlog.id}`}><button id={this.state.oneBlog.id}>Edit</button></Link> : null}
          </div>
        }
      </>
    )
  }
}

// [TBU] On refresh, page loses all information. Need to correct this.