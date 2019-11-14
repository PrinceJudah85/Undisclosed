import React from 'react';

export default class UpdateUser extends React.Component {
  state = {
    userData: {
      image_url: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevstate => ({
      userData: {
        ...prevstate.userData,
        [name]: value
      }
    }))
  }

  render() {
    return (
      <div className='update-user'>
        <form className='update-form' onSubmit={(event) => {
          event.preventDefault();
          this.props.handleEditUser(this.props.id, this.state.userData)
        }}>
          <label htmlFor="image_url">Image</label>
          <input
            type="text"
            name="image_url"
            id="image"
            placeholder="Insert Image URL"
            value={this.state.image_url}
            onChange={this.handleChange}
          />
          <br />
          {/* <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <br /> */}
          <button>Update</button>
        </form>
      </div>
    )
  }
}
