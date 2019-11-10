import React from 'react';
import Link from 'react-router-dom';


export default function MainPageUser(props) {
  return (
    <div>
      <p>Hello, {props.currentUser.username}</p>
      <button>Following</button>
      <button>Favorites</button>
      <button>Create</button>
      <button onClick={props.handleLogout}>Logout</button>
      {
        
      }
    </div>
  )
}

  //import component into App.js

  // < MainPageUser currentUser={this.state.currentUser} currentUserBlogs={this.allUserBlogs}/>
  //render in app.js

  //  if (this.state.currentUser) {
  //       this.allUserBlogs(this.state.currentUser.id);
  //  }

  // allUserBlogs = async(id) => {
  //   // const id = this.state.currentUser.id
  //   const userBlogs = await getAllUserBlogs(id)
  //   this.setState({
  //     currentUserBlogs: userBlogs
  //   })
  // }

  // import getAlluserBlogs into app.js

  // ,currentUserBlogs: [] I put this in state to grab all of the users blogs