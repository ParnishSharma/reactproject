import React from 'react';
import { Link } from 'react-router-dom'
function Navbar() {


  
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="#">PS</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home<span className="sr-only"></span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Interests">Interests</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/More">Contact Me</Link>
        </li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
