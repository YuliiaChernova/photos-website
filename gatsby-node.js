/* global exports */
const { extractText, createPath } = require('./src/utils');

exports.createPages = async ({ actions, graphql }) => {
  
  const { createPage } = actions;
  const result = await graphql(`
    {
      albums: allWpMediaItem {
        edges {
          node {
            caption
          }
        }
      }
    }
  `);

  const albums = result.data.albums.edges;

  albums.forEach(({ node }) => {
    createPage({
      path: createPath(extractText(node.caption)),
      component: require.resolve('./src/templates/Album.js'),
      context: {
        caption: node.caption
      }
    });
  });
};
