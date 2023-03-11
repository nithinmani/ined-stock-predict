import React, { useState, useEffect } from "react";
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
import HOMEIMG from "./HOMEIMG1.png"

function Home() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const [selectedOption, setSelectedOption] = useState();
  const optionList = [
    { value: "TCS", label: "TCS" },
    { value: "TATAMOTORS", label: "TATA MOTORS" },
    { value: "ICICIBANK", label: "ICICI BANK" },
    { value: "ASIANPAINT", label: "ASIAN PAINTS" },
    { value: "AAPL", label: "Apple" },
  ];

  function handleSelect(data) {
    setSelectedOption(data);
  }

  function handleClick() {
    console.log(selectedOption);
    const myElement = <CompanyPage company={selectedOption.value} />;
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
          <h1 className="title mb-4">MARKET FORECAST</h1>
          <div className="row my-4">
            <div className="col">
              <div className="dropdown-container">
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
        <Features/>
      </div>
      <div className="row mb-2">
        <NoviceInvester/>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-3">
          <StockData />
        </div>
        <div className="col-lg-6 mb-3">
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
