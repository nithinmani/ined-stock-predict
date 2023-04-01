import React from "react";

function LSTMOutput(props) {
  const { lstOutput } = props;

  if (!lstOutput || !lstOutput.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>LSTM Output</h2>
      <ul>
        {lstOutput.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  );
}

export default LSTMOutput;
