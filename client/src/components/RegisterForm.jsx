import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
    city: ''
  }

  canBeSubmitted = () => {
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
        event.preventDefault()
        this.props.handleRegister(this.state)
      }}>
        <Link to="/">
          <img src="https://i.imgur.com/SGdVbso.png" alt="undisclosed logo" />
        </Link>
        <h2>Register for a new account</h2>
        <label htmlFor="username">Username</label>
        <input
          placeholder="username"
          name="username"
          id="username"
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          placeholder="password"
          name="password"
          id="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          placeholder="city"
          name="city"
          id="city"
          type="text"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <button disabled={!isEnabled}>Submit</button>
        <br />
      </form>
    )
  }
}