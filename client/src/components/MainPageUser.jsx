import React from 'react';
// import Link from 'react-router-dom';


export default function MainPageUser(props) {
  return (
    <div className="main-side">
      <p>Hello, {props.currentUser.username}</p>
      <button>Following</button>
      <button>Favorites</button>
      <button>Create</button>
      <button onClick={props.handleLogout}>Logout</button>
      {
        props.currentUserBlogs.map(each => (
          <React.Fragment key={each.id}>
            <img src={each.image_url} alt="blog post" />
            <h2>{each.title}</h2>
            <h3>{each.location}</h3>
            <p>{each.content}</p>
          </ React.Fragment>
        ))
      }
    </div>
  )
}
