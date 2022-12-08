import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'
const User = () => {
  const [searchParams, setSearchparam] = useSearchParams()
  const showActiveUser = searchParams.get("filter") === "active"
  return (
    <>
    <h5>user1</h5>
    <h5>user2</h5>
    <h5>user3</h5>

    <button onClick={()=> setSearchparam( { filter:"active"})}>Active User</button>
    <button onClick={()=> setSearchparam( {})}>Reset Filter</button>

    {
      showActiveUser ? <h3>show active user</h3> : <h3>show all user</h3>
    }

    <Outlet/>
    </>
    
  )
}

export default User