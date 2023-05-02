import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function LiveGraph({ name }) {
  const [graph, setGraph] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/stocks/${name}`);
      const data = await response.json();
      // Filter out data points with value 0
      const filteredData = data.filter(([date, value]) => value !== 0);
      setGraph(filteredData.map(([date, value]) => ({ date, value })));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    // Fetch data every 1 minute
    const intervalId = setInterval(fetchData, 111160000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [name]);

  useEffect(() => {
    const values = graph.map(({ value }) => value);
    setMinValue(Math.min(...values));
    setMaxValue(Math.max(...values));
  }, [graph]);

  return (
    <div style={{paddingRight:"20px"}}>
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={graph}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[minValue - 10, maxValue + 10]} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  );
 
}

export default LiveGraph;
