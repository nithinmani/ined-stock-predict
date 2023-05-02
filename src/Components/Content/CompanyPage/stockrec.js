import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

function StockRec({ name }) {
  const [rec, setRec] = useState([]);

  useEffect(() => {
    const fetchRecommendationTrend = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/get_recommendation_trend/${name}`);
        const jsonData = await response.json();
        setRec(jsonData);
        console.log(jsonData);
        console.log(rec);
      } catch (error) {
        console.error("Failed to fetch recommendation trend:", error);
      }
    };
  
    fetchRecommendationTrend();
  }, []);
  

  const data = [
    {
      name: "Strong Buy",
      value: rec?.recommendationTrend?.trend[0]?.strongBuy || 0,
    },
    { name: "Buy", value: rec?.recommendationTrend?.trend[0]?.buy || 0 },
    { name: "Hold", value: rec?.recommendationTrend?.trend[0]?.hold || 0 },
    { name: "Sell", value: rec?.recommendationTrend?.trend[0]?.sell || 0 },
    {
      name: "Strong Sell",
      value: rec?.recommendationTrend?.trend[0]?.strongSell || 0,
    },
  ];
  
  if (rec?.recommendationTrend?.trend[0]?.strongBuy === 0 && rec?.recommendationTrend?.trend[0]?.buy === 0 && rec?.recommendationTrend?.trend[0]?.hold === 0 && rec?.recommendationTrend?.trend[0]?.sell === 0){
    data[0].value = rec?.recommendationTrend?.trend[1]?.strongBuy || 0;
    data[1].value = rec?.recommendationTrend?.trend[1]?.buy || 0;
    data[2].value = rec?.recommendationTrend?.trend[1]?.hold || 0;
    data[3].value = rec?.recommendationTrend?.trend[1]?.sell || 0;
    data[4].value = rec?.recommendationTrend?.trend[0]?.strongSell || 0;
  }
  

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            labelLine={false}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockRec;
