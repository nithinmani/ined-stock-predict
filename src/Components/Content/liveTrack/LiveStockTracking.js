import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const LiveStockTracking = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "080d5391a5msh8465fd7b03a93c4p1725e9jsnb512929f94b5",
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
      },
    };
    // fetch stock data from API
    const fetchStockData = async () => {
      const response = await fetch(
        "https://real-time-finance-data.p.rapidapi.com/stock-time-series?symbol=AAPL%3ANASDAQ&period=1D",
        options
      );
      const data = await response.json();
      setStockData(data);
    };
    fetchStockData();
  }, []);
  console.log(stockData);
  // const animationProps = useSpring({
  //   // animate stock data
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  // });
  // console.log(stockData);

  // return (
  //   // <animated.div style={animationProps}>
  //   //   {stockData && (
  //   //     <div>
  //   //       <h1>Live Stock Tracking</h1>
  //   //       <p>Stock price: {stockData.price}</p>
  //   //       <p>Change: {stockData.change}</p>
  //   //     </div>
  //   //   )}
  //   // </animated.div>
  // )
};

export default LiveStockTracking;
