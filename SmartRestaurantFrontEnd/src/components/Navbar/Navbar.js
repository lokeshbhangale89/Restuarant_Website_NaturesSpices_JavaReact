import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './navbar.css'

const Navbar = ({loggedIn, username, handleLogout}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" exact ="true" to="/">
          Nature's Spice
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleClick}
        >
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </button>

        <div className={`collapse navbar-collapse ${click ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs5">
            <li className="nav-item" onClick={handleClick}>
              <NavLink className="nav-link" exact ="true" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item" onClick={handleClick}>
              <NavLink className="nav-link" exact ="true" to="/menu">
                Menu
              </NavLink>
            </li>

            <li className="nav-item" onClick={handleClick}>
              <NavLink className="nav-link" exact ="true" to="/fooditems">
                FoodItems
              </NavLink>
            </li>

            { loggedIn ? (
              <>

                <li className="nav-item" onClick={handleClick}>
                  <NavLink className="nav-link" exact ="true" to="/cart">
                    Cart
                  </NavLink>
                </li>

                <li className="nav-item" onClick={handleClick}>
                  <NavLink className="nav-link" exact ="true" to="/orders">
                    Orders
                  </NavLink>
                </li>

                <li className="nav-item" onClick={handleClick} >
                  <button className="nav-link btn btn-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>

                <li className="nav-item" onClick={handleClick}>
                  <button className="nav-link btn btn-link">
                    {username}
                  </button>
                </li>
                
              </>
            ) : (
              <>
                <li className="nav-item" onClick={handleClick}>
                  <NavLink className="nav-link" exact ="true" to="/signup">
                    Signup
                  </NavLink>
                </li>

                <li className="nav-item" onClick={handleClick}>
                  <NavLink className="nav-link" exact ="true" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
};
export default Navbar;
