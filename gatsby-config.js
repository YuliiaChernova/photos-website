module.exports = {
  siteMetadata: {
    title: `photographer-website`,
    description: `Website with portfolio.`,
    author: `@YuliiaChernova`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://photographerspain.local/graphql`
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Cormorant\:400`, `Intro\:400`],
        display: `swap`
      }
    }
  ],
}
