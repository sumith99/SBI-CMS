require("dotenv").config({
  path: `.env`,
})

module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: `World of Game Design`,
    description: `Enter a realm of epic stories that explore endless worlds using the latest artists, writers, and technologies.  Whether you love miniatures, Roleplaying Games (RPGS), terrain, 3D printing, comics, board games, or card games; we think you will find something to entertain you at the World of Game Design.`,
    author: `@wogdesign`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www-d.wogd.com',
        policy: [{userAgent: '*', disallow: ['/']}]
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // `gatsby-plugin-nodejs`,
    // {
    //   resolve: `gatsby-plugin-create-client-paths`,
    //   options: { prefixes: [`/src/pages/*`] },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    //`gatsby-plugin-client-side-redirect`,
  ],
};
