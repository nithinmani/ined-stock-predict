import { useParams } from "react-router-dom";
import React, { useState } from "react";



export default function CompanyPage() {
  const { name } = useParams();
  const[data,setData]=useState("");
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2be1de11d0msh58feda7445d3b54p1b9fdbjsne738a62ed5e4',
      'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com'
    }
  };
  
  fetch('https://ms-finance.p.rapidapi.com/market/get-summary', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  // Use the company name to fetch the company details
  // and display them on the page
  // ...

  return (
  <div>
    <div className="row p-5">
      <h1 className="text-center">{name}</h1>
      <div className="col"></div>
      <div className="col"></div>
    </div>
  </div>
  );
}
