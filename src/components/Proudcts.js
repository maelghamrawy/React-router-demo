import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Proudcts = () => {
  return (
    <>
    <input type="search"/>
    <nav>
    <Link to="featured">Faetured</Link>
    <Link to="news">New</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Proudcts