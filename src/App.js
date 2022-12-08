// import React from 'react';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from './components/About';
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import NoRaute from "./components/NoRaute";
import Proudcts from "./components/Proudcts";
import FeaturedProduct from "./components/FeaturedProduct";
import NewsProudtcs from "./components/NewsProudtcs";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import UserAdmin from "./components/UserAdmin";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order" element={<Order />} />
        <Route path="produtcs" element={<Proudcts />}>
          <Route path="featured" element={<FeaturedProduct/>} />
          <Route path="news" element={<NewsProudtcs/>} />
        </Route>
        <Route path="user" element={<User/>}>
          <Route path=":userId" element={<UserDetails/>}/>
          <Route path="admin" element={<UserAdmin/>}/>
        </Route>
        {/* <Route path="*" errorElement={<NoRaute />} /> */}
      </Routes>

    </>
  );
}

export default App;
