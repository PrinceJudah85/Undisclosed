import React from 'react';
import { Link } from 'react-router-dom';
import { getAllUserBlogs } from '../services/api-helper';

export default class MainPage extends React.Component {

  state = {
    currentUserBlogs: []
  }


  allUserBlogs = async (id) => {
    const userBlogs = await getAllUserBlogs(id)
    this.setState({
      currentUserBlogs: userBlogs
    })
  }

  componentDidMount = () => {
    this.allUserBlogs(this.props.currentUser.id)
  }
  
  render() {
    return (
      <div className="main-side">
        <div className="main-side-top">
          <div className="main-side-top-buttons">
            <h1>{this.props.currentUser.username}</h1>
            <div id="user-image">
              {this.props.currentUser.image_url === null ? <img src='https://i.imgur.com/HZPz2tu.png' alt="default user profile" /> : <img src={this.props.currentUser.image_url} alt="current user profile" />}
            </div>
            <h3>Representing {this.props.currentUser.city}</h3>
            <Link to={`/update_profile/${this.props.currentUser.id}`}>
              <button className="small-button">Edit Profile</button>
            </Link>
            <button onClick={this.props.handleLogout} className="small-button">Logout</button>
            <button>Following</button>
            <button>Favorites</button>
          </div>
          <div className="sticky">
            <Link to="/blogs/new">
              <button>Create</button>
            </Link>
          </div>
          <h1 className="black">My recent posts</h1>
          {
            this.state.currentUserBlogs &&
            this.state.currentUserBlogs.map(blog => (
              <div className="main-user-blogs" key={blog.id}>
                <Link to={`/full_blog/${blog.id}`} >
                  <img src={blog.image_url} alt="blog post" id={blog.id} />
                </Link>
                <div className="main-user-blog-heading">
                  <h2>{blog.title}</h2>
                  <h3>{blog.location}</h3>
                </div>
              </ div>
            ))
          }
        </div>
      </div>
    )
  }
}