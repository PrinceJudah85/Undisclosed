import React from 'react';
import { Link } from 'react-router-dom';

export default function FullBlog(props) {
  return (
    <>
      {
        props.oneBlog &&
        <div id={props.oneBlog.id}>
          <h2>{props.oneBlog.title}</h2>
          <img src={props.oneBlog.image_url} alt="blog location" />
          <h3>Author:<Link to={`/user_blogs/${props.oneBlog.userId}`}>{props.oneBlog.userId}</Link></h3>
          <h3>{props.oneBlog.location}</h3>
          <p>{props.oneBlog.content}</p>
          {props.oneBlog.userId === props.currentUser.id ? <button id={props.oneBlog.id} onClick={props.handleDelete}>Delete</button> : null}
          {props.oneBlog.userId === props.currentUser.id ? <Link to={`/edit/${props.oneBlog.id}`}><button id={props.oneBlog.id}>Edit</button></Link> : null}
        </div>
      }
    </>
  )
}

// [TBU] On refresh, page loses all information. Need to correct this.