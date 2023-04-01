import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LiveGraph from "./LiveGraph/LiveGraph";
import Prediction from "./Prediction/Prediction";
import "./CompanyPage.css";
import LiveGraph2 from "./LiveGraph/LiveGraph2";
import LSTMOutput from './LSTMOutput';
import axios from 'axios';

export default function CompanyPage() {
  const [logo, setLogo] = useState({ url: "" });
  const [profile, setProfile] = useState({
    name: "",
    CEO: "",
    description: "",
  });
  const [results, setResults] = useState({});

  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const logoResponse = await fetch(
          `https://twelve-data1.p.rapidapi.com/logo?symbol=${name}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "2be1de11d0msh58feda7445d3b54p1b9fdbjsne738a62ed5e4",
              "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
            },
          }
        );
        const logoData = await logoResponse.json();
        setLogo(logoData);

        const profileResponse = await fetch(
          `https://twelve-data1.p.rapidapi.com/profile?symbol=${name}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "2be1de11d0msh58feda7445d3b54p1b9fdbjsne738a62ed5e4",
              "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
            },
          }
        );
        const profileData = await profileResponse.json();
        setProfile(profileData);

        const mlResponse = await fetch("http://localhost:5000/ml");
        const mlData = await mlResponse.json();
        setResults(mlData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [name]);

  return (
    <div className="companyPage">
      <div className="row p-5">
        <div className="col-2">
          <img
            src={logo.url}
            alt=""
            style={{ height: "70%", width: "50%" }}
          />
        </div>
        <div className="col-10">
          <h1 className="">{profile?.name}</h1>
        </div>
        <div className="row">
          <p>CEO: {profile?.CEO}</p>
        </div>
        <div className="row">
          <p>{profile?.description}</p>
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
                    <p className="card-text">{}</p>
                    
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
                    <p className="card-text">{}</p>
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
                    <p className="card-text">{}</p>
                  </div>
                </div>
              </div>
            </div>


{/*LiveGraph..................................................................................................... */}
            <div className="row bg-white p-3 " style={{ width: "100%", height: "600px",borderRadius:"20px" }}>
              {/* <LiveGraph name={name} /> */}
              <LiveGraph2 name={name}/>
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
       <Prediction />
        </div>
        <div className="row">
        
          <h2>Next 30 Days Predictions:</h2>
          <ul>
            {results?.lst_output2?.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
