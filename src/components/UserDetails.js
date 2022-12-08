import React from 'react'
import {useParams} from "react-router-dom"
function UserDetails() {
    const param = useParams()
  return (
    <div>UserDetails{param.userId}</div>
  )
}

export default UserDetails