import React from 'react';

export default class EditBlog extends React.Component {
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
      <div className='edit-blog'>
        <h2 id='edit-form-title'>Edit Blog</h2>
        <form id='edit-form' onSubmit={(event) => {
          event.preventDefault();
          this.props.handleEdit(this.props.id, this.state.blogData)
        }}>
          <label className='edit-label' htmlFor="title">Title</label>
          <input className='edit-field'
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label className='edit-label' htmlFor="image_url">Image URL</label>
          <input className='edit-field'
            type="text"
            name="image_url"
            id="image_url"
            placeholder="Image URL"
            value={this.state.image_url}
            onChange={this.handleChange}
          />
          <label className='edit-label' htmlFor="location">Location</label>
          <input className='edit-field'
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <label className='edit-label' htmlFor="content">Content</label>
          <textarea
            name="content"
            id="edit-content"
            row='12'
            resize='true'
            placeholder='Content'
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br />
          <button id='edit-blog-button'>Edit Blog</button>
        </form>
      </div>
    )
  }
}
