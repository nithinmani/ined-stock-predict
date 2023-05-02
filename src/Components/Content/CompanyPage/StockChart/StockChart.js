import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function StockChart({ name }) {
  const [predictedPrices, setPredictedPrices] = useState([]);
  const [random, setRandom] = useState([]);
  const [combine, setCombine] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/predict/${name}`
        );
        setPredictedPrices(response.data.predicted_prices);
        setRandom(response.data.random);
        setCombine(response.data.combine);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [name]);

  if (loading) {
    return <p>Loading...</p>;
  }
  
  const minY = Math.min(...predictedPrices) - 10;
  const maxY = Math.max(...predictedPrices) + 10;

  const minY1 = Math.min(...random) - 10;
  const maxY1 = Math.max(...random) + 10;

  const minY2 = Math.min(...combine) - 10;
  const maxY2 = Math.max(...combine) + 10;

  return (
    <div>
      <div
        className="row"
      
      >
        <h1>Predicted Prices</h1>
        <LineChart width={1000} height={400}>
          <XAxis
            dataKey="index"
            label={{ value: "Time", position: "insideBottomRight", offset: 0 }}
            interval="preserveEnd"
          />
          <YAxis
            label={{
              value: "Price",
              angle: -90,
              position: "insideLeft",
              offset: 0,
            }}
            domain={[minY, maxY]}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            name="lstm"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            data={predictedPrices.map((value, index) => ({ index, value }))}
          />
        </LineChart>
        <LineChart width={800} height={400}>
          <XAxis
            dataKey="index"
            label={{ value: "Time", position: "insideBottomRight", offset: 0 }}
            interval="preserveEnd"
          />
          <YAxis
            label={{
              value: "Price",
              angle: -90,
              position: "insideLeft",
              offset: 0,
            }}
            domain={[minY1, maxY1]}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            name="Random Forest"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
            data={random.map((value, index) => ({ index, value }))}
          />
        </LineChart>
        <LineChart width={800} height={400}>
          <XAxis
            dataKey="index"
            label={{ value: "Time", position: "insideBottomRight", offset: 0 }}
            interval="preserveEnd"
          />
          <YAxis
            label={{
              value: "Price",
              angle: -90,
              position: "insideLeft",
              offset: 0,
            }}
            domain={[minY2, maxY2]}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            name="Combined Prediction"
            stroke="#ffc658"
            activeDot={{ r: 8 }}
            data={combine.map((value, index) => ({ index, value }))}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default StockChart;