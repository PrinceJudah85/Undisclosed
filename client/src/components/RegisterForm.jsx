import React from 'react'

export default class RegisterForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }
  render() {
    return (
      <form className="register" onSubmit={(event) => {
        event.preventDefault()
        this.props.handleRegister(this.state)
        this.setState({
          username: '',
          password: ''
        })
      }}>
        <h2>Register</h2>
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
        <button>Submit</button>
        <br />
        <p>{this.props.authErrorMessage}</p>
      </form>
    )
  }
}