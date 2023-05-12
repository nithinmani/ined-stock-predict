import React from 'react'
import './NoviceInvester.css'
import { useState,useEffect } from 'react';
import Novice from './Novice.png'
import Fade from 'react-reveal/Fade';
import { ReactScrollFade } from 'react-reveal';

export default function NoviceInvester() {

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
    <div className="row Investerrow p-3">
      <div className="col-sm-12">
        <h2 className="text-white text-center mb-5">ARE YOU A NOVICE INVESTOR?</h2>
      </div>
      <div className="col-sm-12 col-md-6">
        <img src={Novice} alt="" className="img-fluid" />
      </div>
      <div className="col-sm-12 col-md-6 text-white">
        <ul>
          <Fade bottom duration={2000}>
          <li className="shadow p-3 mb-4 bg-dark rounded">
            <a style={{textDecoration:"none"}} href={isLoggedIn ? "/profile" : "/register"}><h6>Register Yourself</h6></a>
          </li>
          </Fade>
          <Fade bottom duration={2000} delay={200}>
          <li className="shadow p-3 mb-4 rounded">
            <h6>Search for favourite stocks</h6>
          </li>
          </Fade>
          <Fade bottom duration={2000} delay={500}>
          <li className="shadow p-3 mb-4 rounded">
            <h6>Learn from our Tutorial</h6>
          </li>
          </Fade>
          <Fade bottom duration={2000} delay={800}>
          <li className="shadow p-3 mb-4 rounded">
            <h6>Find easy to understand visual charts and data</h6>
          </li>
          </Fade>
         
        </ul>
      </div>
    </div>
  </div>
  
  )
}
