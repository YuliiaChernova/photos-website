import { graphql, useStaticQuery } from 'gatsby';

export const useAlbumsCovers = () => {
  const data = useStaticQuery(graphql`
  query AlbumsCoversQuery {
    allWpMediaItem {
      edges {
        node {
          localFile {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 100, width: 410, height: 274)
            }
          }
          caption
        }
      }
    }
  }
  `);
  return data;
};