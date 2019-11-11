import React from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import { registerUser, loginUser, verifyUser, getAllBlogs, getAllUserBlogs } from './services/api-helper';
import Welcome from './components/Welcome';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      authErrorMessage: '',
      blogs: [],
      currentUserBlogs: []
    }
  }



  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    if (currentUser.error) {
      this.setState({
        authErrorMessage: currentUser.error
      })
    }
    else {
      this.setState({ currentUser })
      this.props.history.push('/blogs')
    }
  }

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData)
    if (currentUser.error) {
      this.setState({
        authErrorMessage: currentUser.error
      })
    } else {
      this.setState({
        currentUser
      })
      this.props.history.push('/blogs')
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    this.props.history.push('/');
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
    return currentUser
  }

  readAllBlogs = async () => {
    const blogs = await getAllBlogs();
    this.setState({ blogs })
  }

  allUserBlogs = async (id) => {
    const userBlogs = await getAllUserBlogs(id)
    this.setState({
      currentUserBlogs: userBlogs
    })
  }

  async componentDidMount() {
    const currentUser = await this.handleVerify();
    this.readAllBlogs();
    if (currentUser) {
      this.allUserBlogs(currentUser.id);
    }
  }

  render() {
    return (
      <div className="App" >
        <Route exact path="/" render={() => (<Welcome />)} />
        <Header />
        {
          this.state.currentUser ?
            <Route exact path="/blogs" render={() => (<MainPage blogs={this.state.blogs} currentUser={this.state.currentUser} currentUserBlogs={this.state.currentUserBlogs} handleLogout={this.handleLogout} />)} /> :
            <Link to="/login"><button>Login/Register</button></Link>
        }
        <Footer />
        <Route path="/login" render={() => (<LoginForm handleLogin={this.handleLogin} authErrorMessage={this.state.authErrorMessage} />)} />
        <Route path='/register' render={() => (<RegisterForm handleRegister={this.handleRegister} authErrorMessage={this.state.authErrorMessage} />)} />
      </div>
    );
  }
}

export default withRouter(App);