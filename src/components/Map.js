import React, { Suspense, useEffect, useRef } from "react";
import * as d3 from "d3";
import Plotly from "plotly.js-dist-min";

export const Chart = ({ id }) => {
  const devRef = useRef();

  useEffect(() => {
    var data = [
      {
        type: "scattergeo",
        mode: "markers",
        locations: ["IND"],
        marker: {
          size: [20, 30, 15, 10],
          color: [10, 20, 40, 50],
          cmin: 0,
          cmax: 50,
          colorscale: "Greens",
          colorbar: {
            title: "Some rate",
            ticksuffix: "%",
            showticksuffix: "last",
          },
          line: {
            color: "black",
          },
        },
        name: "Road Accidents data",
      },
    ];

    var layout = {
      geo: {
        scope: "europe",
        resolution: 50,
      },
    };

    Plotly.newPlot(devRef.current, data, layout);
  }, []);

  return <div id={id || "1"} ref={devRef} />;
};

export default Chart;
