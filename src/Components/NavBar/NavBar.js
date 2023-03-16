import React, { useEffect, useState } from "react";
import "./NavBar.css";
import INEDLOGO from "./INED LOGO3.png";
import profile from "./profile.png";
import { Link } from "react-router-dom";

function NavBar() {
  localStorage.getItem("token");

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    var token = localStorage.getItem("token") ?? "";
    if (token.length > 5) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand px-4" href="/">
            <img className="logo" src={INEDLOGO} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item py-2 px-3">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item py-2 px-3">
                <a className="nav-link" href="/Tutorial">
                  Tutorial
                </a>
              </li>
              <li className="nav-item px-3">
                <Link
                  className="nav-link"
                  to={isLoggedIn ? "/profile" : "/register"}
                >
                  <img className="profilePic" src={profile} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
