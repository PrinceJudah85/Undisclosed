import React from 'react';
import { Link } from 'react-router-dom';
import MainPageUser from './MainPageUser';

export default class MainPage extends React.Component {

  render() {
    return (
      <div id="main-div">
        <div id="blog-list">
          {
            this.props.blogs.map(blog => (
              <div className="blogs" key={blog.id}>
                <div className="blog-image-container">
                  <img src={blog.image_url} alt="blog-post" />
                </div>
                <div>
                  {/* [TBU] Author displays currentUser and not creator */}
                  <h2>Author: {this.props.currentUser.username}</h2>
                  <h4>{blog.content}</h4>
                  <Link to={`/full_blog/${blog.id}`}>
                    <button id={blog.id} onClick={this.props.handleClick}>...read more!</button>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
        < MainPageUser handleLogout={this.props.handleLogout} currentUser={this.props.currentUser} currentUserBlogs={this.props.currentUserBlogs} />
      </div>
    )
  }
}