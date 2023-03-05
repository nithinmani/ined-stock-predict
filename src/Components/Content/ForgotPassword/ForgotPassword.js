import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  "./ForgotPassword.css";

export default function ForgotPassword() {
    const navigate = useNavigate();
  return (<div>
<div className="row p-5 justfy-content-center align-items-center">
    <div className="col-lg-8 px-5 py-3">
<img src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?w=740&t=st=1677943224~exp=1677943824~hmac=0fcf2424cbba364c1e5977de5008e6db6254ba33605254cd7453351884a64781" alt="forgot password" />
    </div>
    <div className="col forgotField">
        <h1>Forgot Password?</h1>
        <label className="pt-5" style={{fontSize:"30px"}} >Enter your email id</label>
        <br />
        <input type="email" className="mt-3 " style={{width:"400px", borderRadius:"20px",height:"50px"}} />
        <br />
        <button className="mt-3 p-3 bg-success" style={{borderRadius:"10px"}}>Send verification code</button>
        <br />
        <label className="pt-5" style={{fontSize:"30px"}} >Enter the code</label>
        <br />
        <input type="number" className="px-5" style={{width:"400px", borderRadius:"20px",height:"50px",fontSize:"20px"}}  />
        <br />
        <a href="/login">I want to sign in?</a><br />
        <button className="m-3 p-3 px-5 bg-success" style={{borderRadius:"10px"}}>Verify</button>

    </div>
</div>
  </div>);
}
