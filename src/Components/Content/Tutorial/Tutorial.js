import React from "react";
import "./Tutorial.css";
import live from './comp2.png'
import toimage from './tutorial.gif'
import { Fade } from "react-reveal";
function Tutorial() {
  return (
    <div className="tutorialPage container-fluid ">
      <div className="row shadow rounded mb-5 tutorialhead" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="col-lg-4">
      <img style={{width:"100%", height:"100%"}} src={toimage} alt="" />
      </div>
      <div className="col-lg-8">
      <h1 style={{fontSize:"6rem"}}>FAQ</h1>
      </div>
      </div>
      <div className="container-fluid px-3">
      <div className="row">
      <div className="col-lg-6 px-3">
        <Fade bottom duration="2000">
        <div className="shadow my-3 p-3" style={{borderRadius:"20px",backgroundColor:"aliceblue"}}>
      <h6>Stock Symbol:</h6>
      <p>
        A one to three-character alphabet root symbol which represents a company
        listed on the exchange.
      </p>
      </div>
      </Fade>
      <Fade bottom duration="2000" delay="1000">
      <h6>How does the stock market work?</h6>
      <p>
        The stock market is made of many traders and investors who are willing
        to buy and sell stocks. The transactions start when the buyer and
        sellers start trading the stock. The prices of the stocks rise and fall
        based on the demand and supply for those stocks. The stock exchange
        provides a safe platform for the transaction of these stocks.
      </p>
      </Fade>
      <Fade bottom duration="2000">
      <div className="shadow my-3 p-3" style={{borderRadius:"20px",backgroundColor:"aliceblue"}}>
      <h6>What is long-term investing?</h6>
      <p>
        Long-term investors are those who want to invest in financial assets for
        more than one year. Long-term investors can invest in financial assets
        like stocks, mutual funds, bonds, etc. which give more return in the
        long term. Long-term investors can take the advantage of compounding. It
        takes time as well as dedication to grasp the intricacies of securities
        trading, but when you do, the stock trading terminologies above will
        become a part of your daily vocabulary.
      </p>
      </div>
      </Fade>
      <Fade bottom duration="2000" delay="1000">
      <h6>Portfolio:</h6>
      <p>A collection of investments owned by you.</p>
      </Fade>
      <Fade bottom duration="2000">
      <div className="shadow my-3 p-3" style={{borderRadius:"20px",backgroundColor:"aliceblue"}}>
      <h6>What is NIFTY and Sensex?</h6>
      <p>
NIFTY and Sensex are the benchmark indexes used by NSE and BSE respectively to determine the overall performance of stock market. Sensex is a collection of the top 30 stocks listed on BSE and NIFTY is a collection of the top 50 companies listed on NSE.</p>
</div>
</Fade>
</div>
<div className="col-lg-6">
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Term</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th className="p-3" scope="row">1</th>
      <td className="p-3">Sensex</td>
      <td className="p-3">Sensex is a collection of the top 30 stocks listed on BSE by way of market capitalisation. </td>
    </tr>
    <tr>
      <th className="p-3" scope="row">2</th>
      <td className="p-3">SEBI</td>
      <td className="p-3">Securities and Exchange Board of India (Sebi) is the securities market regulator to oversee any fraudulent transactions and activities made by any of the parties: companies, investors, traders, brokers and the likes</td>
    </tr>
    <tr>
      <th className="p-3" scope="row">3</th>
      <td className="p-3">Demat</td>
      <td className="p-3">Demat, or dematerialised account, is a form of an online portfolio that holds a customer’s shares and other securities in an electronic (dematerialised) format. </td>
    </tr>
    
    <tr>
      <th className="p-3" scope="row">4</th>
      <td className="p-3">Trading</td>
      <td className="p-3">It is the process of buying or selling of shares in a company.  </td>
    </tr>
    <tr>
      <th className="p-3" scope="row">5</th>
      <td className="p-3">Stock Market Broker</td>
      <td className="p-3">A stock broker is an investment advisor who execute transactions such as the buying and selling of stocks on behalf of their clients. </td>
    </tr>
    <tr>
      <th className="p-3" scope="row">6</th>
      <td className="p-3">Bid Price</td>
      <td className="p-3">Bid price is the highest price a buyer will pay to buy a specified number of shares of a stock at any given time. </td>
    </tr>
    <tr>
      <th className="p-3" scope="row">7</th>
      <td className="p-3">Ask Price</td>
      <td className="p-3">Ask price in stock market refers to the lowest price at which a seller will sell the stock.</td>
    </tr>
    <tr>
      <th className="p-3" scope="row">8</th>
      <td className="p-3">Equity</td>
      <td className="p-3">Equity is the value that would be received by the shareholder if all of the company’s assets were liquidated and all of the company's debts were paid off.</td>
    </tr>
    
  </tbody>
</table>
</div>
</div>
<div className="row mt-3">
  <h3>STOCK VALUES</h3>
  <div className="col-lg-6 ">
    <img className="shadow" style={{width:"100%"}} src={live} alt="" />
  </div>
  <div className="col  " >
    <div className="row shadow my-3 p-3" style={{backgroundColor:"aliceblue", borderRadius:"20px"}}>
      <h6>Today High</h6>
      <p>A data point on a stock chart that shows the highest value that a stock reached during a trading day.</p>
      </div>
      <div className="row">
        <h6>Today Low</h6>
        <p>Today's low is the lowest price that a stock trades in that day</p>
        
      </div>
      <div className="row shadow my-3 p-3" style={{backgroundColor:"aliceblue", borderRadius:"20px"}}>
       <h6>Value</h6>
       <p>Current price is also known as market value. It is the price at which a share of stock or any other security last traded.</p>
      </div>
      <div className="row">
        <h6>Current Ratio</h6>
        <p>The current ratio is a liquidity ratio that measures a company's ability to pay short-term obligations or those due within one year.</p>
        
      </div>
  </div>
</div>
</div>
    </div>
  );
}

export default Tutorial;
