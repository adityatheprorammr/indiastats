import React from "react";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  ThemeProvider,
  theme,
  Text,
} from "@chakra-ui/react";
import AnimatedNumber from "react-animated-number";

const SingleStat = ({ size = 4, title = "", description }) => {
  return (
    <Box textAlign={"center"} >
      <Heading size={`sm`}>
        <AnimatedNumber
          component="text"
          value={14559}
          style={{
            transition: "5s ease-out",
            fontSize: size*25,
            background: "#fefefe",
          }}
          duration={2000}
          formatValue={(n) => n.toFixed(0)}
        />
      </Heading>
      <Heading size={`${size / 4 === 1 ? "" : size / 4}xl`} my={"16px"}>
        {title}
      </Heading>
      <Text size={"md"}>{description}</Text>
    </Box>
  );
};

export default SingleStat;
