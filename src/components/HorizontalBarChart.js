import React, { Suspense, useEffect, useRef } from "react";
import Plotly from 'plotly.js-dist-min'

export const HorizontalBarChart = ({ id }) => {
  const devRef = useRef();

  useEffect(() => {
    var data = [
      {
        type: "bar",
        x: [100, 200, 400, 500, 600, 800],
        orientation: "h",
      },
    ];

    Plotly.newPlot(devRef.current.id, data);
  }, []);

  return <div id={id || "1"} ref={devRef} />;
};


export default HorizontalBarChart;
