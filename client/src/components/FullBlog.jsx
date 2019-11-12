import React from 'react';
import { Link } from 'react-router-dom';

export default function FullBlog(props) {
  return (
    <>
      {
        props.oneBlog &&
        <div id={props.oneBlog.id}>
          <h2>{props.oneBlog.title}</h2>
          <img src={props.oneBlog.image_url} alt="image of the location" />
          <h3>Author:<Link to={`/user_blogs/${props.oneBlog.userId}`}>{props.oneBlog.userId}</Link></h3>
          <h3>{props.oneBlog.location}</h3>
          <p>{props.oneBlog.content}</p>
        </div>
      }
    </>
  )
}

// [TBU] On refresh, page loses all information. Need to correct this.