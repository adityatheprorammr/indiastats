/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Inter pro:200,400,700,700"],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingIds: ["G-JJW7NYLSS8"],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
      }
    },
    "@chakra-ui/gatsby-plugin",
  ],
};
