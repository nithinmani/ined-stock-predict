import React from "react";
import "./Tutorial.css";

function Tutorial() {
  return (
    <div className="tutorialPage">
      <h1>Tutorial</h1>
      <div className="container-fluid">
      <div className="row">
      <div className="col-lg-6 px-3">
        <div className="shadow my-3 p-3" style={{borderRadius:"20px",backgroundColor:"aliceblue"}}>
      <h6>Stock Symbol:</h6>
      <p>
        A one to three-character alphabet root symbol which represents a company
        listed on the exchange.
      </p>
      </div>
      <h6>How does the stock market work?</h6>
      <p>
        The stock market is made of many traders and investors who are willing
        to buy and sell stocks. The transactions start when the buyer and
        sellers start trading the stock. The prices of the stocks rise and fall
        based on the demand and supply for those stocks. The stock exchange
        provides a safe platform for the transaction of these stocks.
      </p>
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
      <h6>Portfolio:</h6>
      <p>A collection of investments owned by you.</p>
      <div className="shadow my-3 p-3" style={{borderRadius:"20px",backgroundColor:"aliceblue"}}>
      <h6>What is NIFTY and Sensex?</h6>
      <p>
NIFTY and Sensex are the benchmark indexes used by NSE and BSE respectively to determine the overall performance of stock market. Sensex is a collection of the top 30 stocks listed on BSE and NIFTY is a collection of the top 50 companies listed on NSE.</p>
</div>
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
      <th scope="row">1</th>
      <td>Sensex</td>
      <td>Sensex is a collection of the top 30 stocks listed on BSE by way of market capitalisation. </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>SEBI</td>
      <td>Securities and Exchange Board of India (Sebi) is the securities market regulator to oversee any fraudulent transactions and activities made by any of the parties: companies, investors, traders, brokers and the likes</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Demat</td>
      <td>Demat, or dematerialised account, is a form of an online portfolio that holds a customer’s shares and other securities in an electronic (dematerialised) format. </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Sensex</td>
      <td>Sensex is a collection of the top 30 stocks listed on BSE by way of market capitalisation. </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Trading</td>
      <td>It is the process of buying or selling of shares in a company.  </td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Stock Market Broker</td>
      <td>A stock broker is an investment advisor who execute transactions such as the buying and selling of stocks on behalf of their clients. </td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Bid Price</td>
      <td>Bid price is the highest price a buyer will pay to buy a specified number of shares of a stock at any given time. </td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Ask Price</td>
      <td>Ask price in stock market refers to the lowest price at which a seller will sell the stock.</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Equity</td>
      <td>Equity is the value that would be received by the shareholder if all of the company’s assets were liquidated and all of the company's debts were paid off.</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Dividend</td>
      <td>Dividend refers to cash or reward that a company provides to its shareholders. It can be issued in various forms, such as cash payment, stocks or any other form</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
    </div>
  );
}

export default Tutorial;
