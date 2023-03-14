import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LiveGraph from "./LiveGraph/LiveGraph";

export default function CompanyPage() {
  const [data, setData] = useState("");
  const { name } = useParams();

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2be1de11d0msh58feda7445d3b54p1b9fdbjsne738a62ed5e4",
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com"
      }
    };
    try {
      const response = await fetch(
        `https://real-time-finance-data.p.rapidapi.com/stock-overview?symbol=${name}%3Anse&language=en`,
        options
      );
      const json = await response.json();
      setData(json);
      console.log(json); // optional, for debugging purposes
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  // Use the company name to fetch the company details
  // and display them on the page
  // ...
  

  return (
  <div>
    <div className="row p-5">
      <h1 className="text-center">{name}</h1>
      <div className="row">
        <p>{data?.data?.about}</p>
      </div>
      <div className="col-lg-8">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
            <div className="card text-white bg-dark mb-3" style={{"maxWidth": "18rem"}}>
  {/* <div className="card-header">Header</div> */}
  <div className="card-body">
    <h5 className="card-title">Today High</h5>
    <p className="card-text">{data?.data?.high}</p>
  </div>
</div>
            </div>
            <div className="col">
            <div className="card text-white bg-dark mb-3" style={{"maxWidth": "18rem"}}>
  {/* <div className="card-header">Header</div> */}
  <div className="card-body">
    <h5 className="card-title">Today Low</h5>
    <p className="card-text">{data?.data?.low}</p>
  </div>
</div>
            </div>
            <div className="col">
            <div className="card text-white bg-dark mb-3" style={{"maxWidth": "18rem"}}>
  {/* <div className="card-header">Header</div> */}
  <div className="card-body">
    <h5 className="card-title">Value</h5>
    <p className="card-text">{data?.data?.price}</p>
  </div>
</div>
            </div>
          </div>


          <div className="row " style={{width:"100%",height:"400px"}}>
            <LiveGraph name={name}/>
            {/* <img src="https://www.perkins.org/wp-content/uploads/2022/07/Amazon_2.png" alt="" /> */}
          </div>


        </div>
      </div>
      <div className="col">
        <div className="row">
        <div className="card text-white bg-dark mb-3" style={{"maxWidth": "18rem"}}>
  {/* <div className="card-header">Header</div> */}
  <div className="card-body">
    <h5 className="card-title">Value</h5>
    <p className="card-text">2048.97</p>
  </div>
</div>
        </div>
        <div className="row">
        <div className="card text-white bg-dark mb-3" style={{"maxWidth": "18rem"}}>
  {/* <div className="card-header">Header</div> */}
  <div className="card-body">
    <h5 className="card-title">Value</h5>
    <p className="card-text">2048.97</p>
  </div>
</div>
        </div>
        <div className="row">
        <div className="card text-white bg-dark mb-3" style={{"maxWidth": "18rem"}}>
  {/* <div className="card-header">Header</div> */}
  <div className="card-body">
    <h5 className="card-title">Value</h5>
    <p className="card-text">2048.97</p>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
  );
}
