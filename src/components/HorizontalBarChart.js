import React, { Suspense, useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";

export const HorizontalBarChart = ({ id, data, layout }) => {
  const devRef = useRef();

  useEffect(() => {
    Plotly.newPlot(devRef.current.id, data);
  }, []);

  return <div id={id || "1"} ref={devRef} />;
};

export default HorizontalBarChart;
