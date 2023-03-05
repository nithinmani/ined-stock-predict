import React, { useState, useEffect } from "react";
import "./StockData.css";
import refresh from './refresh.png'

export default function StockList() {
  const [stocks, setStocks] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "080d5391a5msh8465fd7b03a93c4p1725e9jsnb512929f94b5",
      "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    },
  };

  const handleRefreshClick = () => {
    fetch(
      "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setStocks(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch(
      "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setStocks(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // sort stocks by pChange and get top gainers and losers
  const sortedStocks = stocks.sort((a, b) => b.pChange - a.pChange);
  const topGainers = sortedStocks.slice(0, 5);
  const topLosers = sortedStocks.slice(-5).reverse();

  return (
    <div className="TopGainerPage">
      <button onClick={handleRefreshClick} className="rounded-circle mx-5"><img src={refresh} alt="" className="refreshButtonImage rounded-circle"/></button>
      <div className="row px-5 py-3">
        <h1>TOP GAINERS</h1>
        <table className="TopGainerTable">
          <thead>
            <tr className="TopGainerHead">
              <th className="bg-success text-white p-3">Symbol</th>
              <th className="bg-success text-white">Open</th>
              <th className="bg-success text-white">High</th>
              <th className="bg-success text-white">Low</th>
              <th className="bg-success text-white">Value</th>
              <th className="bg-success text-white">%Change</th>
            </tr>
          </thead>
          <tbody className="p-3">
            {topGainers.map((topGainer, index) => (
              <tr key={index}>
                <td className="p-3">{topGainer.symbol}</td>
                <td>&#8377;{topGainer.open}</td>
                <td>&#8377;{topGainer.dayHigh}</td>
                <td>&#8377;{topGainer.dayLow}</td>
                <td>&#8377;{topGainer.lastPrice}</td>
                <td className="text-success">{topGainer.pChange}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row p-5">
        <h1>TOP LOSERS</h1>
        <table className="TopGainerTable">
          <thead>
            <tr>
              <th className="bg-danger text-white p-3">Symbol</th>
              <th className="bg-danger text-white">Open</th>
              <th className="bg-danger text-white">High</th>
              <th className="bg-danger text-white">Low</th>

            <th className="bg-danger text-white">Value</th>
            <th className="bg-danger text-white">%Change</th>
          </tr>
        </thead>
        <tbody className="p-3">
          {topLosers.map((topLosers, index) => (
            <tr key={index}>
              <td className="p-3">{topLosers.symbol}</td>
              <td>&#8377;{topLosers.open}</td>
              <td>&#8377;{topLosers.dayHigh}</td>
              <td>&#8377;{topLosers.dayLow}</td>
              <td>&#8377;{topLosers.lastPrice}</td>
              <td className="text-danger">{topLosers.pChange}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
