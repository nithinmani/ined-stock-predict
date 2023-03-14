import React, { Component } from "react";
import "./footer.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
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
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="#">
            <i className="icon ion-social-instagram"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-snapchat"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-twitter"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/">Home</a>
          </li>
          <li className="list-inline-item">
            <Link
              className="nav-link"
              to={isLoggedIn ? "/profile" : "/register"}
            >
              Profile
            </Link>
          </li>
          <li className="list-inline-item">
            <a href="/about">About</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p className="copyright">INED © 2023</p>
      </footer>
    </div>
  );
}
