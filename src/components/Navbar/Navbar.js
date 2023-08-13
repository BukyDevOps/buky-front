import logo from "../../static/img/logo.png";
import { getRole, logout } from "../../helpers/AuthHelper";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(getRole());
  }, []);

  return (
    <>
      <header id="header">
        <div className="header-top">
          <div className="container"></div>
        </div>
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <Link to="/home">
                <img src={logo} alt="" title="" />
              </Link>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/accommodations">Accommodations</Link>
                </li>
                {role === "" && (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
                {role === "HOST" && (
                  <li>
                    <Link to="/my-accommodations">My Accommodations</Link>
                  </li>
                )}
                {role !== "" && (
                  <>
                    <li>
                      <Link to="/my-reservations">Reservations</Link>
                    </li>
                    <li>
                      <Link to="/my-profile">My Profile</Link>
                    </li>
                    <li>
                      <button onClick={logout}>Logout</button>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
