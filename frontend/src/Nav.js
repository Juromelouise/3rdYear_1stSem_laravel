import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul className="nav nav-tabs justify-content-center">
            <li className='nav-item'>
                <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to="/create" className='nav-link'>Create</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav