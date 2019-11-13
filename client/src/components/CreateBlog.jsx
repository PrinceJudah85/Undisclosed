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

  handleChange = (event) => {
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
        <h2 id="create-form-title">Create Blog</h2>
        <form id='create-form' onSubmit={(event) => {
          event.preventDefault();
          this.props.createBlog(this.props.currentUser.id, this.state.blogData)
        }}>
          <label className='create-label' htmlFor="title">Title</label>
          <input className='create-field'
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label className='create-label' htmlFor="image_url">Image URL</label>
          <input className='create-field'
            type="text"
            name="image_url"
            id="image_url"
            placeholder="Image URL"
            value={this.state.image_url}
            onChange={this.handleChange}
          />
          <label className='create-label' htmlFor="location">Location</label>
          <input className='create-field'
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <label className='create-label' htmlFor="content">Content</label>
          <textarea
            // type="text"
            name="content"
            id="content"
            placeholder="Content"
            row="12"
            resize="true"
            value={this.state.content}
            onChange={this.handleChange} // Can you use "controlFunc" property for this?
          />
          <br />
          <button id='create-blog-button'>Submit Blog</button>
        </form>
      </div>
    )
  }
}