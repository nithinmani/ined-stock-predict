import React, { useState, useEffect } from "react";
import axios from "axios";
import { ResponsiveLine } from "@nivo/line";

export default function LiveGraph2({ name }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://twelve-data1.p.rapidapi.com/time_series",
      params: {
        symbol: `${name}`,
        interval: "1week",
        outputsize: "90",
        format: "json",
      },
      headers: {
        "X-RapidAPI-Key": "2be1de11d0msh58feda7445d3b54p1b9fdbjsne738a62ed5e4",
        "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setData(response.data.values);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ height: "500px" }}>
      {data.length ? (
        <ResponsiveLine
          data={[
            {
              id: name,
              color: "hsl(80, 70%, 50%)",
              data: data.map((item) => ({
                x: item.datetime,
                y: parseFloat(item.close),
              })),
            },
          ]}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "time", format: "%Y-%m-%d" }}
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
            format: "%b %d",
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
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
