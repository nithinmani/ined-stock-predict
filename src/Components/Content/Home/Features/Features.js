import React from "react";
import "./Features.css";
import Earth from "./Earth.png";
import Fade from "react-reveal/Fade";
import { HashLink } from "react-router-hash-link";

function Features() {
  return (
    <div>
      <div className="row Featuresrow p-3">
        <h1 className="text-white">Features</h1>
        <div className="col-lg-7">
          <div className="row p-3">
            <div className="col-sm-6">
              <Fade top duration={1800}>
                <div className="card mt-2">
                  <div className="card-body">
                    <h5 className="card-title">Real-time stock prices</h5>
                    <p className="card-text">
                      Provide real time value and change of stocks. Keeps you
                      up-to-date with current market condition
                    </p>
                    <HashLink to="/#topgainer" className="btn btn-primary">Go to top gainers</HashLink>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-sm-6">
              <Fade top duration={1800} delay={300}>
                <div className="card mt-2">
                  <div className="card-body">
                    <h5 className="card-title">Education resources</h5>
                    <p className="card-text">
                      Helps you to learn from the basics of stock market. It
                      would helps you to make your own smart decisions
                    </p>
                    <HashLink to="/tutorial" className="btn btn-primary">Go to tutorial</HashLink>
                  </div>
                </div>
              </Fade>
            </div>
          </div>

          <div className="row p-3">
            <div className="col-sm-6">
            <Fade top duration={1800} delay={600}>
              <div className="card mt-2">
                <div className="card-body">
                  <h5 className="card-title">News and analysis</h5>
                  <p className="card-text">
                    Keeps you up-to-date with live new feed which would affect
                    the stock market
                  </p>
                  
                  <HashLink to="/#newslive" className="btn btn-primary">Get live news</HashLink>
                 
                </div>
              </div>
              </Fade>
            </div>
            <div className="col-sm-6">
            <Fade top duration={1800} delay={1000}>
              <div className="card mt-2">
                <div className="card-body">
                  <h5 className="card-title">Technical analysis tools</h5>
                  <p className="card-text">
                    Provide detailed analysis of the stock based on the the
                    various technical factors affecting the market
                  </p>
                  <HashLink to="/#searchcomp" className="btn btn-primary">search company</HashLink>
                </div>
              </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="col">
          <img className=" ml-5" src={Earth} alt="earth" />
        </div>
      </div>
    </div>
  );
}

export default Features;
