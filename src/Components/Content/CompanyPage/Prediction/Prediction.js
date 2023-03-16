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

function Prediction({ name }) {
  const [selectedOption, setSelectedOption] = useState();
  const optionList = [
    { value: "1 month", label: "1 month" },
    { value: "1 day", label: "1 day" },
    { value: "1 year", label: "1 year " },
    
  ];
  const data = [
    {
      id: name,
      color: "hsl(80, 70%, 50%)",
      data: [
        {
          x: "Jan",
          y: 94,
        },
        {
          x: "Feb",
          y: 299,
        },
        {
          x: "Mar",
          y: 179,
        },
        {
          x: "Apr",
          y: 2,
        },
        {
          x: "May",
          y: 228,
        },
        {
          x: "Jun",
          y: 104,
        },
        {
          x: "Jul",
          y: 174,
        },
        {
          x: "Aug",
          y: 226,
        },
        {
          x: "Sep",
          y: 250,
        },
        {
          x: "Oct",
          y: 277,
        },
        {
          x: "Nov",
          y: 157,
        },
        {
          x: "Dec",
          y: 173,
        },
      ],
    },
  ];
  const MyResponsiveLine = { data };

  return (
    <>
    <h2>Prediction in {selectedOption}</h2>
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
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
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
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Live Stock",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "value",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
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
    </>
  );
}

export default Prediction;
