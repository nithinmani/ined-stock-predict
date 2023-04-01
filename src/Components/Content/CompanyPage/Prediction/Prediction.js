// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";
import { Dropdown } from "bootstrap";
import Select from "react-select";
import { useState } from "react";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import React from "react";

function Prediction() {
  const [flag,setFlag]=useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [result,setResult] = useState();
  const optionList = [
    { value: "1 month", label: "1 month" },
    { value: "1 day", label: "1 day" },
    { value: "1 year", label: "1 year " },
    
  ];
  
async function handlePredict(){
try{
  const mlResponse = await fetch("http://localhost:5000/ml");
        const mlData = await mlResponse.json();
        setResult(mlData);
        setFlag(true);
      } catch (error) {
        console.error(error);
      }
    }
  return (
    <>
    <h2>Prediction in {selectedOption}</h2>
    <div className="col">
    <div className="dropdown-container">
                <Select
                  className="text-black"
                  options={optionList}
                  placeholder="Select period"
                  value={selectedOption}
                  onChange=""
                  isSearchable={true}
                />
              </div>
              </div>
              <div className="col">
                <button onClick={handlePredict}>Predict</button>
              </div>
              <div style={{ height: "500px" }}>
      {
      (flag&&result?.lst_output2?.length)?
       <ResponsiveLine
          data={[
            {
              id: "hi",
              color: "hsl(80, 70%, 50%)",
              data: result?.lst_output2?.map((value, index) => ({
                x: index,
                y: parseFloat(value),
              })),
            },
          ]}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "linear" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            
            tickValues: "every 2 month",
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Date",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Value",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={0}
          pointBorderWidth={0}
          useMesh={true}
          enableArea={true} // Set this prop to enable the mountain graph
          areaBaselineValue={0} // Set the baseline of the mountain graph to 0
          areaOpacity={0.8} // Set the opacity of the mountain graph
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
       : <p>Loading data...</p>}
    </div>
    </>
  );
}

export default Prediction;
