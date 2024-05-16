import React from 'react'
import logo from '../src/assets/images/logo.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <header className="navbar">
    <img  src={logo} alt="Entri News Logo" className="logo" />
    <nav className="links">
      <ul className="d-flex list-unstyled gap-4">
        <li>
          <Link to="#" className="link text-decoration-none fs-5.5">
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className="link text-decoration-none fs-5.5">
            New
          </Link>
        </li>
        <li>
          <Link to="#" className="link text-decoration-none fs-5.5">
            Popular
          </Link>
        </li>
        <li>
          <Link to="/trending" className="link text-decoration-none fs-5.5">
            Trending
          </Link>
        </li>
        <li>
          <Link to="#" className="link text-decoration-none fs-5.5">
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  
</header>

    </div>
  )
}

export default Header