import React from "react";
import "./Tutorial.css";

function Tutorial() {
  return (
    <div className="tutorialPage">
      <h1>Tutorial</h1>
      <h6>Stock Symbol:</h6>
      <p>
        {" "}
        A one to three-character alphabet root symbol which represents a company
        listed on the exchange.
      </p>
      <h6>How does the stock market work?</h6>
      <p>
        The stock market is made of many traders and investors who are willing
        to buy and sell stocks. The transactions start when the buyer and
        sellers start trading the stock. The prices of the stocks rise and fall
        based on the demand and supply for those stocks. The stock exchange
        provides a safe platform for the transaction of these stocks.
      </p>
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
      <h6>Portfolio:</h6>
      <p>A collection of investments owned by you.</p>
    </div>
  );
}

export default Tutorial;
