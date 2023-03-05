import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUs(){
    return(
<div>
    <div className="row p-5 mt-5">
        <h1>About Us</h1>
    </div>
    <div className="row px-5">
        <div className="col">
<p style={{fontSize:"20px"}}>INED helps the consumers to be more financially independent and it helps the beginners to understand the basic factors in stockmarket. This website also helps you to Understand about market trends which would help you slect the best stocks to invest in.</p>
        </div>
        <div className="col">
            <img src="https://img.freepik.com/free-vector/employees-giving-hands-helping-colleagues-walk-upstairs_74855-5236.jpg?w=1060&t=st=1677982985~exp=1677983585~hmac=c92c79459194d8166f1e7d6d869cde605c2efe069bd70a862cbbbe992bf77040" alt="" style={{height:"60vh"}}/>
        </div>
    </div>
</div>
    );

}