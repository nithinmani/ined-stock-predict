import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";

const SentimentGraph = ({ name }) => {
  const [sentimentData, setSentimentData] = useState([]);
  const [fetchSuccess, setFetchSuccess] = useState(false);

  useEffect(() => {
    const fetchSentimentData = async () => {
      try {
        let nData = [];
        let idx = 1;
        const response = await axios.get(
          `http://127.0.0.1:5000/news_sentiment/${name}`
        );
        console.log(response.data);
        response.data[0].forEach((d) => {
          nData.push({
            Date: idx,
            sentiment_score: d,
          });
          idx = idx + 1;
        });
        console.log("pred", nData);

        setSentimentData(nData);
        setFetchSuccess(true);
      } catch (error) {
        console.error(error);
        setFetchSuccess(false);
      }
    };

    fetchSentimentData();
  }, [name]);

  return (
    <div>
      {fetchSuccess && (
        <>
         <h3>Sentiment Score Prediction</h3>
        <LineChart width={600} height={400} data={sentimentData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis domain={[0.5, 0.56]} />
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
};

export default SentimentGraph;
