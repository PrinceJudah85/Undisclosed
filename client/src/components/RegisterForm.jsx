import React from 'react'

export default class RegisterForm extends React.Component {
  state = {
    username: '',
    password: '',
    city: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }
  render() {
    return (
      <form className="register-form" onSubmit={(event) => {
        event.preventDefault()
        this.props.handleRegister(this.state)
        this.setState({
          username: '',
          password: ''
        })
      }}>
        <h2>Register for a new account</h2>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          id="username"
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          name="city"
          id="city"
          type="text"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <button>Submit</button>
        <br />
        <p>{this.props.authErrorMessage}</p>
      </form>
    )
  }
}