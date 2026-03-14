import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import FoodItems from './pages/FoodItems/FoodItems'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
import Cart from './pages/Cart/Cart'
import OrdersList from './pages/Order/order'
import axios from 'axios';
import { getCookie, removeCookie } from './cookie'
import jwt_decode from 'jwt-decode';
import SmartSearch from './pages/SmartSearch/SmartSearch'
import SubHeaderSearch from './pages/SmartSearch/SubHeaderSearch'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate()

  const HandleLoginSubmit = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:4000/user/auth/login', { email, password }, { withCredentials: true });
      // console.log(response.data.accessToken)
      // document.cookie = `access_token=${response.data.accessToken}`;
     
      setUsername(response.data.name);
      setLoggedIn(true);
      alert('Login successful');
      navigate('/')

    } catch (error) {
      alert(`Login failed: Invalid Credentials ${error.message}`);
    }
  };

  useEffect(() => {
    const username = getCookie("username");

    if (username) {
      setLoggedIn(true);
      setUsername(username);}
  });

  const handleLogout = () => {
    removeCookie("access_token");
    removeCookie("username");
    setLoggedIn(false);
    setUsername("")
    window.location.reload();
  };

  return (
    <div>
      <Navbar loggedIn={loggedIn} username={username} handleLogout={handleLogout} />
      {(window.location.pathname === "/" || window.location.pathname === '/search') && <SubHeaderSearch />}
      
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/fooditems" element={<FoodItems />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login HandleLoginSubmit={HandleLoginSubmit} />} />
            <Route path='/cart' element={<Cart />} />
            {/* <Route path='/orders' /> */}
            <Route path='/orders' element={<OrdersList />}/>
            <Route path="/search" element={<SmartSearch />} />

        </Routes>
      <Footer />
    </div>
  );
}

export default App;
