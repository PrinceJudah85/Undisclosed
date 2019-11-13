import React from 'react';

export default class EditBlog extends React.Component {
  state = {
    name: '',
    image_url: '',
    fun_fact: '',
    quote: ''
  }

  componentDidMount() {
    this.setBlogData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps. !== this.props.characters) {
      this.setCharacterData()
    }
  }

  setCharacterData = () => {
    if (this.props.characters.length) {
      const {
        name,
        image_url,
        fun_fact,
        quote
      } = this.props.characters.find(character => {
        return character.id === parseInt(this.props.characterId)
      })
      this.setState({
        name,
        image_url,
        fun_fact,
        quote
      })
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
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="image_url">Image URL</label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            value={this.state.image_url}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="content">Content</label>
          <input
            type="text"
            name="content"
            id="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <br />
          <button>Submit Blog</button>
        </form>
      </div>
    )
  }
}