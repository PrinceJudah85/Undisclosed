import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:3000');
    const message = response.data.message
    this.setState({
      message
    })
  }

  render() {
    return (
      <div className="App" >
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default App;