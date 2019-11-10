import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="welcome-page">
      <div className="login">
        <Link to="/login">
          <button>
            Sign In
          </button>
        </Link>
      </div>
      <div id="welcome-title">
        <h1 className="title-font"> UNDISCLOSED </h1>
      </div>
    </div>
  )
}
export default Welcome;