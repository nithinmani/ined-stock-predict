import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Prediction({ name }) {
  const [predictedPrices, setPredictedPrices] = useState([]);
  const [random, setRandom] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/predict/${name}`);
        setPredictedPrices(response.data.predicted_prices);
        setRandom(response.data.predicted_prices2);
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

  return (
    <div>
      <div className="row">
      <h1>Predicted Prices</h1>
      <LineChart width={800} height={400} data={predictedPrices.map((value, index) => ({index, value}))}>
        <XAxis dataKey="index" label={{ value: 'Time', position: 'insideBottomRight', offset: 0 }} />
        <YAxis label={{ value: 'Price', angle: -90, position: 'insideLeft', offset: 0 }} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
      </div>
    </div>
  );
};

export default Prediction;
