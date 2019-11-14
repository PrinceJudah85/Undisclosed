import React from 'react';
import { Link } from 'react-router-dom';

export default class RegisterForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  canBeSubmitted() {
    const { username, password } = this.state;
    return (
      username.length > 5 &&
      password.length > 5
    );
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }
  render() {
    const isEnabled = this.canBeSubmitted();

    return (
      <form className="register-form" onSubmit={(event) => {
        if (!this.canBeSubmitted()) {
          event.preventDefault()
          return;
        }
        this.props.handleRegister(this.state)
        this.setState({
          username: '',
          password: ''
        })
      }}>
        <Link to="/">
          <img src="https://i.imgur.com/SGdVbso.png" alt="undisclosed logo" />
        </Link>
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
        <button disabled={!isEnabled}>Submit</button>
        <br />
        <p>{this.props.authErrorMessage}</p>
      </form>
    )
  }
}