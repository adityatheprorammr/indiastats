import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";
import Slide from "react-reveal/Slide";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  ThemeProvider,
  theme,
} from "@chakra-ui/react";
import AnimatedNumber from "react-animated-number";

export default function RoadAccidents() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Slide bottom>
          <Title />
        </Slide>
        <Slide bottom>
          <Total />
        </Slide>
        <Grid>
          <GridItem colStart={[3]} colEnd={[11]}>
            <Slide bottom>
              <Chart />
            </Slide>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem colStart={[3]} colEnd={[11]}>
            <Slide bottom>
              <Chart id={"2"} />
            </Slide>
          </GridItem>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export const Chart = ({ id }) => {
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

const Total = () => {
  return (
    <Box textAlign={"center"}>
      <Heading size={"4xl"}>
        <AnimatedNumber
          component="text"
          value={14559}
          style={{
            transition: "5s ease-out",
            fontSize: 100,
            background: "#fefefe",
          }}
          duration={2000}
          formatValue={(n) => n.toFixed(0)}
        />
      </Heading>
    </Box>
  );
};

const Title = () => {
  return (
    <Box textAlign={"center"}>
      <Heading size={"4xl"}>Road Accidents in India</Heading>
    </Box>
  );
};
