import React, { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import StockData from "../StockData/StockData";
import News from "../News/News";
import AboutUs from "./AboutUs/AboutUs";
import Features from "./Features/Features";
import NoviceInvester from "./NoviceInvester/NoviceInvester";
import sample from "./sample.mp4";
import "./Home.css";
import CompanyPage from "../CompanyPage/CompanyPage";
import HOMEIMG from "./HOMEIMG1.png";

import Fade from 'react-reveal/Fade';

function Home() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  

  useEffect(() => {
    var token = localStorage.getItem("token") ?? "";
    if (token.length > 5) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const [selectedOption, setSelectedOption] = useState();
  const optionList = [
    { value: "TCS.NS", label: "TCS" },
    { value: "tsla", label: "Tesla" },
    { value: "MSFT", label: "Microsoft" },
    { value: "ASIANPAINT.NS", label: "ASIAN PAINTS" },
    { value: "ADANIENT.NS", label: "Adani Enterprises" },
    { value: "AAPL", label: "Apple" },
    { value: "ADANIPORTS.NS", label: "Adani Ports & SEZ" },
    { value: "APOLLOHOSP.NS", label: "Apollo Hospitals" },
    { value: "ASIANPAINT.NS", label: "Asian Paints" },
    { value: "AXISBANK.NS", label: "Axis Bank" },
    { value: "BAJAJ-AUTO.NS", label: "Bajaj Auto" },
    { value: "BAJFINANCE.NS", label: "Bajaj Finance" },
    { value: "BAJAJFINSV.NS", label: "Bajaj Finserv" },
    { value: "BPCL.NS", label: "Bharat Petroleum" },
    { value: "BHARTIARTL.NS", label: "Bharti Airtel" },
    { value: "BRITANNIA", label: "Britannia Industries" },
    { value: "CIPLA.NS", label: "Cipla" },
    { value: "COALINDIA.NS", label: "Coal India" },
    { value: "DIVISLAB.NS", label: "Divi's Laboratories" },
    { value: "HDFC.NS", label: "HDFC" },
    { value: "HDFCBANK.NS", label: "HDFCBANK" },
    { value: "ICICIBANK.NS", label: "ICICIBANK" },
    { value: "INDUSINDBK.NS", label: "IndusInd Bank" },
    { value: "HINDUNILVR.NS", label: "Hindustan Unilever" },
    { value: "INFY.NS", label: "Infosys" },
    { value: "ITC.NS", label: "ITC" },
    { value: "JSWSTEEL.NS", label: "JSWSTEEL" },
    { value: "KOTAKBANK.NS", label: "KOTAKBANK" },
    { value: "LT.NS", label: "Larsen & Toubro" },
  ];

  function handleSelect(data) {
    setSelectedOption(data);
  }

  function handleClick() {
    console.log(selectedOption);
    navigate(`/company/${selectedOption.value}`);
  }

  return (
    <div className="HomePage container-fluid">
      <div
        className="row Homerow"
        style={{ minHeight: "200px", maxHeight: "calc(100vh - 56px)" }}
      >
        <div className="col-lg-7 d-flex align-items-center">
          <video
            className="videoTag"
            autoPlay
            loop
            muted
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <source src={sample} type="video/mp4" />
          </video>
          {/* <img className="mr-5"  src="https://img.freepik.com/free-vector/isometric-stock-exchange-financial-market-trading-composition_1284-67573.jpg?w=740&t=st=1678464790~exp=1678465390~hmac=cee899be45a58cf458be2a4171f0d16ca185ad78cd8f95ea7e00557e13822783" alt="" /> */}
        </div>
        <div className="col-lg-5 col-sm-12 d-flex flex-column justify-content-center text-white leftHome px-3">
          <Fade bottom duration={2000} delay={500}>
          <h1 className="title mb-4">MARKET FORECAST</h1>
          </Fade>
          <div className="row my-4" id="searchcomp">
            <div className="col">
              <div className="dropdown-container" >
                <Select
                  className="text-black"
                  options={optionList}
                  placeholder="Select company"
                  value={selectedOption}
                  onChange={handleSelect}
                  isSearchable={true}
                />
              </div>
            </div>
            <div className="col-auto">
              <button
                className="button btn-outline-success searchButtonHome"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Features />
      </div>
    
      <div className="row mb-2">
      
        <NoviceInvester />
      

      </div>
   
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 mb-3 " id="topgainer">
          <StockData />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 mb-3" id="newslive">
          <News />
        </div>
      </div>
      <div className="row">
      
        <div className="col">
          <AboutUs />
        </div>
     
      </div>
    </div>
  );
}

export default Home;
