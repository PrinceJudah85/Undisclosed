import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { registerUser, loginUser, verifyUser, getAllBlogs, getAllUserBlogs, postBlog, deleteBlog, putBlog, putUser } from './services/api-helper';
import Welcome from './components/Welcome';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import UpdateUser from './components/UpdateUser';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog'
import MainPage from './components/MainPage';
import FullBlog from './components/FullBlog';
import UserBlogs from './components/UserBlogs';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      authErrorMessage: '',
      blogs: [],
      currentUserBlogs: [],
    }
  }


  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    if (currentUser.error) {
      this.setState({
        authErrorMessage: currentUser.error
      })
    } else {
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
      this.setState({ currentUser })
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

  // =========== CREATE BLOG FUNCTION ============

  createBlog = async (user_id, blogData) => {
    const response = await postBlog(user_id, blogData);
    const newBlog = response
    this.setState(prevState => ({
      blogs: [...prevState.blogs, newBlog],
      currentUserBlogs: [...prevState.currentUserBlogs, newBlog]
    }))
    this.props.history.push('/blogs')
  }

  async componentDidMount() {
    const currentUser = await this.handleVerify();
    await this.readAllBlogs();
    if (currentUser) {
      this.allUserBlogs(currentUser.id);
    }
  }

  handleDelete = async (e) => {
    const id = e.target.id
    await deleteBlog(id)
    this.setState(prevState => ({
      blogs: [...prevState.blogs.filter(blog => { return blog.id !== parseInt(id) })],
      currentUserBlogs: [...prevState.currentUserBlogs.filter(currentBlog => { return currentBlog.id !== parseInt(id) })]
    }))
    this.props.history.push('/blogs')
  }

  handleEdit = async (id, formData, userId) => {
    const newBlog = await putBlog(id, formData, userId);
    this.setState(prevState => ({
      blogs: [...prevState.blogs.map(blog => blog.id === newBlog.id ? newBlog : blog)],
      currentUserBlogs: [...prevState.currentUserBlogs.map(currentBlog => currentBlog.id === newBlog.id ? newBlog : currentBlog)]
    }))
    this.props.history.push(`/full_blog/${id}`)
  }

  handleEditUser = async (id, formData) => {
    const newUser = await putUser(id, formData);
    this.setState({
      currentUser: [this.state.currentUser.id === newUser.id ? newUser : this.state.currentUser]
    })
    this.props.history.push('/blogs')
  }

  render() {
    return (

      <div className="App" >
        <Route exact path="/" render={() => (<Welcome />)} />
        {
          this.state.currentUser ?
            <Header /> : <div></div>
        }
        {
          this.state.currentUser && this.state.blogs ?
            <Route exact path="/blogs" render={() => (<MainPage oneBlog={this.state.oneBlog} blogs={this.state.blogs} currentUser={this.state.currentUser} currentUserBlogs={this.state.currentUserBlogs} handleLogout={this.handleLogout} />)} /> :
            <div></div>
        }

        <Route path="/login" render={() => (<LoginForm handleLogin={this.handleLogin} authErrorMessage={this.state.authErrorMessage} />)} />

        <Route path='/register' render={() => (<RegisterForm handleRegister={this.handleRegister} authErrorMessage={this.state.authErrorMessage} />)} />

        <Route path="/full_blog/:id" render={(props) => (<FullBlog id={props.match.params.id} blogs={this.state.blogs} oneBlog={this.state.oneBlog} currentUserBlogs={this.state.currentUserBlogs} currentUser={this.state.currentUser} handleDelete={this.handleDelete} />)} />

        <Route path='/blogs/new' render={() => (<CreateBlog currentUser={this.state.currentUser} createBlog={this.createBlog} />)} />

        <Route path="/user_blogs/:id" render={(props) => (<UserBlogs allUserBlogs={this.allUserBlogs} id={props.match.params.id} />)} />

        <Route path="/edit/:id" render={(props) => (<EditBlog id={props.match.params.id} handleChange={this.handleChange} handleEdit={this.handleEdit} currentUser={this.state.currentUser} />)} />
        {
          this.state.currentUser ?
            <Footer /> : <div></div>
        }

        <Route path="/update_profile/:id" render={(props) => (<UpdateUser id={props.match.params.id} currentUser={this.state.currentUser} handleEditUser={this.handleEditUser} />)} />

      </div>
    );
  }
}

export default withRouter(App);