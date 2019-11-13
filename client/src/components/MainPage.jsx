import React from 'react';
import { Link } from 'react-router-dom';
import MainPageUser from './MainPageUser';

export default class MainPage extends React.Component {

  render() {
    return (
      <div id="main-div">
        <div id="blog-list">
          <h1>Take a look at our most recent posts!</h1>
          {
            this.props.blogs &&
            this.props.blogs.map(blog => (
              <div className="blogs" key={blog.id}>
                <div className="blog-image-container">
                  <img src={blog.image_url} alt="blog-post" />
                </div>
                <div>
                  <h3>Created by: {blog.user.username}</h3>
                  <p>{blog.content}</p>
                  <Link to={`/full_blog/${blog.id}`}>
                    <button id={blog.id} onClick={this.props.handleClick}>...read more!</button>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
        {
          this.props.currentUser &&
          < MainPageUser handleLogout={this.props.handleLogout} currentUser={this.props.currentUser} currentUserBlogs={this.props.currentUserBlogs} />
        }
      </div>
    )
  }
}

//{this.props.urrentUser.id === blog.user.id ? delete button} allows you to conditionally render admin id. Or on User.init table, add another columns, isAdmin: true