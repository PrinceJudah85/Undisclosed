import React from 'react';

export default function CommentList(props) {
  return (
    <div>
      {props.comments && 
        props.comments.blog.id === props.blog_id ?
          props.comments.map(comment => (
            <div>
              <p>{comment.content}</p>
              <button onClick={() => props.destroyComment(comment.blog.id, comment.id)}></button>
            </div>
          )) : null
      }
    </div>
  )
}