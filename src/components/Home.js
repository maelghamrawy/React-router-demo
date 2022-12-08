import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (

        <>
        <h1>Home</h1>
          <button onClick={()=>navigate("Order")}> order</button>

        </>


    )
}

export default Home