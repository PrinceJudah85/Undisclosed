import React from 'react';

export default class CreateBlog extends React.Component {
  state = {
    blogData: {
      title: '',
      image_url: '',
      content: '',
      location: ''
      // "additional_images:" input field is part of Post MVP. Figure out how to implement this field in the form. Will have to make changes to the back end as well.
    }
  }

  handlePostChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevstate => ({
      blogData: {
        ...prevstate.blogData,
        [name]: value
      }
    }))
  }

  render() {
    return (
      <div className='create-blog'>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.createBlog(this.props.currentUser.id, this.state.blogData)
        }}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handlePostChange}
          />
          <br />
          <label htmlFor="image_url">Image URL</label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            value={this.state.image_url}
            onChange={this.handlePostChange}
          />
          <br />
          <label htmlFor="content">Content</label>
          <input
            type="text"
            name="content"
            id="content"
            value={this.state.content}
            onChange={this.handlePostChange}
          />
          <br />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={this.state.location}
            onChange={this.handlePostChange}
          />
          <br />
          <button>Submit Blog</button>
        </form>
      </div>
    )
  }
}