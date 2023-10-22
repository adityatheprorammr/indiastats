// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from "@chakra-ui/react";
const theme = {
  fonts: {
    heading: `'inter', sans-serif`,
    body: `'inter', sans-serif`,
  },
  colors: {
    primary: "rebeccapurple",
  },
};

export default extendTheme(theme); // or extendBaseTheme
