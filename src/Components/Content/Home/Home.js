import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import StockData from "../StockData/StockData";
import News from "../News/News";
import AboutUs from "./AboutUs/AboutUs";
import sample from "./sample.mp4";
import "./Home.css";

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
  }

  return (
    <div className="HomePage container-fluid">
      <div
        className="row bg-black mb-3"
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
        </div>
        <div className="col-lg-5 col-sm-12 d-flex flex-column justify-content-center text-white leftHome px-3">
          <h1 className="title mb-4">MARKET FORECAST</h1>
          <div className="row my-4">
            <div className="col">
              <div className="dropdown-container">
                <Select
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
