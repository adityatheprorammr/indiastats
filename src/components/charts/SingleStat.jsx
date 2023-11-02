import React from "react";

import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import AnimatedNumber from "react-animated-number";

const SingleStat = ({
  unit,
  value = 100,
  size = 4,
  title = "",
  description,
}) => {
  return (
    <Box textAlign={"center"}>
      <Flex justifyContent={"center"} alignItems={"baseline"}>
        <Heading size={`sm`}>
          <AnimatedNumber
            component="text"
            value={value}
            style={{
              transition: "5s ease-out",
              fontSize: size * 25,
              background: "#fefefe",
            }}
            duration={2000}
            formatValue={(n) => n.toFixed(0)}
          />
        </Heading>
        <Text fontSize={'24px'} fontWeight={'bold'}>{unit}</Text>
      </Flex>
      <Heading size={`${size / 4 === 1 ? "" : size / 4}xl`} my={"16px"}>
        {title}
      </Heading>
      <Text size={"md"}>{description}</Text>
    </Box>
  );
};

export default SingleStat;
