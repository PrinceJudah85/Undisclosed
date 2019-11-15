import React from 'react';

export default function CommentList(props) {
  return (
    <div className="comment-parent">
      {props.comments &&
        props.comments.map(comment => (
          comment.blogId === props.blog_id && (
            <div className="comment-wrapper">
              <p>{comment.content}</p>
              <button className="comment-delete" onClick={() => props.destroyComment(comment.id)}>Delete Comment</button>
            </div>
          )))
      }
    </div>
  )
}