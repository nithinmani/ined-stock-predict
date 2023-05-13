import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function NewsSent({name}) {
  const [sentimentData, setSentimentData] = useState([]);

  useEffect(() => {
    async function getSentiment() {
      const response = await axios.get(`http://127.0.0.1:5000/news_sentiment/${name}`);
      setSentimentData(JSON.parse(response.data)); // parse the JSON string
      console.log(response);
    }
    getSentiment();
  }, []);

  // Helper function to format the date
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div>
      <h1>Sentiment Scores</h1>
      <LineChart width={600} height={300} data={sentimentData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" tickFormatter={formatDate} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sentiment_score" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
}

export default NewsSent;
