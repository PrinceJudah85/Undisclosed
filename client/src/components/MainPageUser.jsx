import React from 'react';
import { Link } from 'react-router-dom';


export default function MainPageUser(props) {
  return (
    <div className="main-side">
      <div className="main-side-top">
        <div className="black">
          <h1>Hello, {props.currentUser.username}</h1>
          <button onClick={props.handleLogout}>Logout</button>
          <button>Following</button>
          <button>Favorites</button>
        </div>
        <div className="sticky black">
          <Link to={`/blogs/${props.currentUser.id}/new`}>
            <button>Create</button>
          </Link>
        </div>
        {
          props.currentUserBlogs.map(each => (
            <div className="main-user-blogs" key={each.id}>
              <img src={each.image_url} alt="blog post" />
              <div className="main-user-blog-heading">
                <h2>{each.title}</h2>
                <h3>{each.location}</h3>
                {/* <p>{each.content}</p> */}
              </div>
            </ div>
          ))
        }
      </div>
    </div>
  )
}