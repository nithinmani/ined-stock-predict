import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LiveGraph from "./LiveGraph/LiveGraph";
import Prediction from "./Prediction/Prediction";
import "./CompanyPage.css";

export default function CompanyPage() {
  const [data, setData] = useState("");
  const { name } = useParams();

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2be1de11d0msh58feda7445d3b54p1b9fdbjsne738a62ed5e4",
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
      },
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
    <div className="companyPage">
      <div className="row p-5">
        <h1 className="">{name}</h1>
        <div className="row">
          <p>{data?.data?.about}</p>
        </div>
        <div className="col-lg-8">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div
                  className="card text-white bg-black mb-3"
                  style={{ maxWidth: "18rem" }}
                >
                  {/* <div className="card-header">Header</div> */}
                  <div className="card-body">
                    <h5 className="card-title">Today High</h5>
                    <p className="card-text">{data?.data?.high}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card text-white bg-black mb-3"
                  style={{ maxWidth: "18rem" }}
                >
                  {/* <div className="card-header">Header</div> */}
                  <div className="card-body">
                    <h5 className="card-title">Today Low</h5>
                    <p className="card-text">{data?.data?.low}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="card text-white bg-black mb-3"
                  style={{ maxWidth: "18rem" }}
                >
                  {/* <div className="card-header">Header</div> */}
                  <div className="card-body">
                    <h5 className="card-title">Value</h5>
                    <p className="card-text">{data?.data?.price}</p>
                  </div>
                </div>
              </div>
            </div>


{/*LiveGraph..................................................................................................... */}
            <div className="row bg-white p-3 " style={{ width: "100%", height: "400px",borderRadius:"20px" }}>
              <LiveGraph name={name} />
            </div>
{/* LiveGraph end..................................................................................................... */}


          </div>
          </div>
 
{/* top high low value end..................................................................................................................... */}
<div className="col-lg-4 bg-white p-3 " style={{borderRadius:"20px",boxShadow:"20px"}}>
  <h3>Detailed Analysis</h3>
  <div className="row">
          <div className="col mx-2 " >
            <div className="row">
              <div
                className="card text-white bg-black mb-3"
                style={{ maxWidth: "18rem" }}
              >
                {/* <div className="card-header">Header</div> */}
                <div className="card-body">
                  <h5 className="card-title">Value</h5>
                  <p className="card-text">2048.97</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card text-white bg-black mb-3"
                style={{ maxWidth: "18rem" }}
              >
                {/* <div className="card-header">Header</div> */}
                <div className="card-body">
                  <h5 className="card-title">Value</h5>
                  <p className="card-text">2048.97</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card text-white bg-black mb-3"
                style={{ maxWidth: "18rem" }}
              >
                {/* <div className="card-header">Header</div> */}
                <div className="card-body">
                  <h5 className="card-title">Value</h5>
                  <p className="card-text">2048.97</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card text-white bg-black mb-3"
                style={{ maxWidth: "18rem" }}
              >
                {/* <div className="card-header">Header</div> */}
                <div className="card-body">
                  <h5 className="card-title">Value</h5>
                  <p className="card-text">2048.97</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col mx-2">
            <div className="row">
              <div
                className="card text-white bg-black mb-3"
                style={{ maxWidth: "18rem" }}
              >
                {/* <div className="card-header">Header</div> */}
                <div className="card-body">
                  <h5 className="card-title">Value</h5>
                  <p className="card-text">2048.97</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card text-white bg-black mb-3"
                style={{ maxWidth: "18rem" }}
              >
                {/* <div className="card-header">Header</div> */}
                <div className="card-body">
                  <h5 className="card-title">Value</h5>
                  <p className="card-text">2048.97</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card text-white bg-black mb-3"
                style={{ maxWidth: "18rem" }}
              >
                {/* <div className="card-header">Header</div> */}
                <div className="card-body">
                  <h5 className="card-title">Value</h5>
                  <p className="card-text">2048.97</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card text-white bg-black mb-3"
                style={{ maxWidth: "18rem" }}
              >
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
      </div>
      <div className="row mx-5 ">
        <div className="col">
        <div className="row bg-white" style={{borderRadius:"20px", width:"400px", height:"300px"}}>
            
            </div>
            <div className="row bg-white my-3" style={{borderRadius:"20px", width:"400px", height:"300px"}}>
            
        </div>
        </div>
        <div className="col-lg-8 p-3 bg-white" style={{ width: "70%", height: "70%",borderRadius:"20px" }}>
       <Prediction name={name}/>
        </div>
      </div>
    </div>
  );
}
