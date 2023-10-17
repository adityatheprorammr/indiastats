import React, { Suspense, useEffect, useRef } from "react";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  ThemeProvider,
  theme,
} from "@chakra-ui/react";

const Title = React.lazy(() => import("../components/Title.js"));
const BarChart = React.lazy(() => import("../components/BarChart.js"));
const Total = React.lazy(() => import("../components/Total.js"));
const Map = React.lazy(() => import("../components/Map.js"));

export default function RoadAccidents() {
  const isSSR = typeof window === "undefined";
  if (isSSR) return null;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Suspense fallback={"loading"}>
          <Title />
        </Suspense>
        <Total />
        <Grid>
          <GridItem colStart={[3]} colEnd={[11]}>
            <Suspense fallback={"loading"}>
              <BarChart id="1" />
            </Suspense>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem colStart={[3]} colEnd={[11]}>
            <Suspense fallback={"loading"}>
              <Map id={"2"} />
            </Suspense>
          </GridItem>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
