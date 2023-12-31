import React, { Suspense, useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";

export const HorizontalBarChart = ({
  id,
  height,
  data,
  layout,
  barwidth = 50,
}) => {
  const devRef = useRef();

  useEffect(() => {
    Plotly.newPlot(
      devRef.current.id,
      data.map((series) => {
        return {
          ...series,
          type: "bar",
          text: series.y.map((value) => {
            return value + "%";
          }),
          textposition: 'outside',
        };
      }),
      {
        height: height,
      }
    );
  }, []);

  return <div id={id || "1"} ref={devRef} height={height + "px"} />;
};

export default HorizontalBarChart;
