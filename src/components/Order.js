import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const navigate = useNavigate()
  return (
    <>
    <h1>order</h1>
    <button onClick={()=> navigate(-1)}>back</button>
    </>
  )
}

export default Order