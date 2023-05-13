import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fade from 'react-reveal/Fade';

export default function AboutUs() {
  return (
    <div className="container">
       <Fade bottom duration={2000} >
      <div className="row p-5 mt-5">
        <h1 className="col-12">About Us</h1>
      </div>
      </Fade>
      <Fade bottom duration={2000} delay={200}>
      <div className="row px-5">
        <div className="col-lg-6 col-md-12 mb-3 mb-lg-0">
          <p style={{ fontSize: "20px" }}>
            INED helps the consumers to be more financially independent and it
            helps the beginners to understand the basic factors in stockmarket.
            This website also helps you to Understand about market trends which
            would help you slect the best stocks to invest in.
          </p>
        </div>
        <div className="col-lg-6 col-md-12">
          <img
            src="https://img.freepik.com/free-vector/employees-giving-hands-helping-colleagues-walk-upstairs_74855-5236.jpg?w=1060&t=st=1677982985~exp=1677983585~hmac=c92c79459194d8166f1e7d6d869cde605c2efe069bd70a862cbbbe992bf77040"
            alt=""
            className="img-fluid"
            style={{ maxHeight: "60vh" }}
          />
        </div>
      </div>
      </Fade>
    </div>
  );
}
