import React from 'react';
import { Link } from 'react-router-dom';


export default function MainPageUser(props) {
  return (
    <div className="main-side">
      <div className="main-side-top">
        <div className="main-side-top-buttons">
          <h1>Hello, {props.currentUser.username}</h1>
          {/* <img src={props.authors.image_url} alt="author avatar" /> */}
          <button onClick={props.handleLogout}>Logout</button>
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
          props.currentUserBlogs.map(blog => (
            <div className="main-user-blogs" key={blog.id}>
              <Link to={`/full_blog/${blog.id}`} >
                <img src={blog.image_url} alt="blog post" id={blog.id} />
              </Link>
              <div className="main-user-blog-heading">
                <h2>{blog.title}</h2>
                <h3>{blog.location}</h3>
                {/* <p>{blog.content}</p> */}
              </div>
            </ div>
          ))
        }
      </div>
    </div>
  )
}