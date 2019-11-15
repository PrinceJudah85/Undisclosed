import React from 'react';
import { Link } from 'react-router-dom';
import { getAllUserBlogs } from '../services/api-helper';

export default class UserBlogs extends React.Component {
  state = {
    currentUserBlogs: []
  }

  allUserBlogs = async (id) => {
    const userBlogs = await getAllUserBlogs(id)
    this.setState({
      currentUserBlogs: userBlogs
    })
  }

  componentDidMount = async () => {
    this.allUserBlogs(this.props.id);
  }

  render() {
    return (
      <div>
        {
          this.state.currentUserBlogs.map(blog => (
            <div className="user-blogs" key={blog.id}>
              <div className="user-blog-image-container">
                <img src={blog.image_url} alt="blog-post" />
              </div>
              <div className="user-blog-content-container">
                <h2>Author: {blog.user.username}</h2>
                <p>{blog.content}</p>
                <Link to={`/full_blog/${blog.id}`}>
                  <button>...read more!</button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}