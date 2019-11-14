import React from 'react'
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="welcome-main">
      <div className="welcome-page">
        <div className="login">
          <Link to="/login">
            <button>
              Sign In
          </button>
          </Link>
        </div>
        <div className="welcome-title">
          <h1 className="title-font"> UNDISCLOSED </h1>
          <img src="https://i.imgur.com/phHcHGC.png" alt="city skyline"/>
        </div>
      </div>
    </div>
  )
}