import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.handleLogin(this.state)
      }}>
        <h2>Login</h2>
        <label htmlFor="username">username</label>
        <input
          name="username"
          id="username"
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">password</label>
        <input
          name="password"
          id="password"
          type="text"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <Link to='/blogs'><button>Login</button></Link>
        <Link to='/register'>register</Link>
      </form>
    )
  }
}