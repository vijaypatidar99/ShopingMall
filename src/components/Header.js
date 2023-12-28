import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate('/login');
  }
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="collapse navbar-collapse justify-content-between mx-5" id="navbarNav">
          <ul className="navbar-nav ">
          <li className="nav-item active">
              <Link className="nav-link" to="/"><h2>Home</h2></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about"><h2>About</h2></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact"><h2>Contact</h2></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products"><h2>Products</h2></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userform"><h2>userform</h2></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/griddemo"><h2>GridDemo</h2></Link>
            </li>
          </ul>
        <button className='btn btn-secondary ' onClick={handleCLick} >Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Header
