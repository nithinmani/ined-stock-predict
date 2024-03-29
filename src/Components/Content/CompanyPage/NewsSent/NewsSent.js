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

function NewsSent({ name }) {
  const [sentimentData, setSentimentData] = useState([]);
  const [fetchSuccess, setFetchSuccess] = useState(false);

  useEffect(() => {
    async function getSentiment() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/hist_sentiment/${name}`
        );
        setSentimentData(JSON.parse(response.data));
        setFetchSuccess(true);
        console.log("news sent", response.data);
      } catch (error) {
        console.error(error);
        setFetchSuccess(false);
      }
    }
    getSentiment();
  }, [name]);

  // Helper function to format the date
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div>
      
      {fetchSuccess && (
        <>
        <h3>Sentiment Scores</h3>
        <LineChart width={600} height={400} data={sentimentData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" tickFormatter={formatDate} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sentiment_score"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        </>
      )}
    </div>
  );
}

export default NewsSent;
