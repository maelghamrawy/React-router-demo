import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className='primaryNav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/produtcs">Proudcts</NavLink>
    </nav>
    

  )
}

export default Navbar