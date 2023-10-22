import React, { Suspense, useEffect, useRef } from "react";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  ThemeProvider,
  theme,
} from "@chakra-ui/react";
import WithSubnavigation from "../components/layout";
import { Slide } from "react-reveal";
const Title = React.lazy(() => import("../components/Title.js"));
const BarChart = React.lazy(() =>
  import("../components/HorizontalBarChart.js")
);
const Total = React.lazy(() => import("../components/Total.js"));
const Map = React.lazy(() => import("../components/Map.js"));

export default function RoadAccidents() {
  const isSSR = typeof window === "undefined";
  return (
    <ThemeProvider theme={theme}>
      <WithSubnavigation>
        <div>
          <Title />
          <Total />
          <Grid>
            <GridItem colStart={[3]} colEnd={[11]}>
              {!isSSR ? (
                <Suspense fallback={<Box h={"100px"} w={"100%"} />}>
                  <Slide bottom>
                    <BarChart id="1" />
                  </Slide>
                </Suspense>
              ) : (
                <Box h={"100px"} w={"100%"} />
              )}
            </GridItem>
          </Grid>
          <Grid>
            <GridItem colStart={[3]} colEnd={[11]}>
              {!isSSR ? (
                <Suspense fallback={<Box h={"100px"} w={"100%"} />}>
                  <Slide bottom>
                    <Map id={"2"} />
                  </Slide>
                </Suspense>
              ) : (
                <Box h={"100px"} w={"100%"} />
              )}
            </GridItem>
          </Grid>
        </div>
      </WithSubnavigation>
    </ThemeProvider>
  );
}
