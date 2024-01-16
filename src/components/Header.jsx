import React from 'react'
import { NavLink } from 'react-router-dom';
function Header() {
  return (
        <nav className="navbar">
            <div className="nav-title-wrapper">
            <h1 className='nav-title'>Snackie</h1>
            </div>
            <ul className="links">
                <li className="link"><NavLink 
                to="/home" 
                className={({ isActive, isPending }) => 
                isPending ? "pending" : isActive ? "active" : ""}>
                Home</NavLink></li>
                <li className="link"><NavLink 
                to="/over-ons" 
                className={({ isActive, isPending }) => 
                isPending ? "pending" : isActive ? "active" : ""}>
                Over Ons</NavLink></li>
                <li className="link"><NavLink 
                to="/contact" 
                className={({ isActive, isPending }) => 
                isPending ? "pending" : isActive ? "active" : ""}>
                Contact</NavLink></li>
            </ul>
        </nav>
  )
}

export default Header