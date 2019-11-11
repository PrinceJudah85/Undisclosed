import React from 'react';
import { Link } from 'react-router-dom';

export default class UserBlogs extends React.Component {
  render() {
    return (
      <div>
        <h2>Author: {this.props.currentUser.username}</h2>
        {
          this.props.blogs.map(blog => (
            <div className="user-blogs" key={blog.id}>
              <div className="user-blog-image-container">
                <img src={blog.image_url} alt="blog-post" />
              </div>
              <div>
                <h2>Author: {this.props.currentUser.username}</h2>
                <h4>{blog.content}</h4>
                <Link to={`/blogs/${this.props.blog_id}`}>
                  <button onClick={() => this.props.handleClick(blog.id)}>...read more!</button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}