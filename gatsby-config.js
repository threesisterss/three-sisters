const config = require('./config/index.ts')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.siteAuthor,
    slogan: config.siteDescriptionLong,
    url: config.siteUrl,
    navigation: config.siteNav,
    contact: config.siteContact,
    social: config.socialLinks,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify-cache',
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'threeesistersss',
        // access_token: 'a valid access token',
        // instagram_id: 'your instagram_business_account id',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: config.favicon,
      },
    },
    // 'gatsby-plugin-offline',
  ],
}
