import React from 'react'

export default class CreateComments extends React.Component {
  state = {
    comment: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <form className="comment-form" onSubmit={(event) => {
          event.preventDefault()
          this.props.createComment(this.props.blog_id, this.state)
        }}>
          <label htmlFor="comment">Username</label>
          <textarea
            name="comment"
            id="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}