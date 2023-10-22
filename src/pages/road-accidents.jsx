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
          <Suspense fallback={"loading"}>
            <Title />
          </Suspense>
          <Total />
          <Grid>
            <GridItem colStart={[3]} colEnd={[11]}>
              {!isSSR ? (
                <Suspense fallback={<Box h={100} w={"100%"} />}>
                  <BarChart id="1" />
                </Suspense>
              ) : (
                <Box h={100} w={"100%"} />
              )}
            </GridItem>
          </Grid>
          <Grid>
            <GridItem colStart={[3]} colEnd={[11]}>
              {!isSSR ? (
                <Suspense fallback={<Box h={100} w={"100%"} />}>
                  <Map id={"2"} />
                </Suspense>
              ) : (
                <Box h={100} w={"100%"} />
              )}
            </GridItem>
          </Grid>
        </div>
      </WithSubnavigation>
    </ThemeProvider>
  );
}
