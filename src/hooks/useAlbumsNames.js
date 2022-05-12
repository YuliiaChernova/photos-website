import { graphql, useStaticQuery } from 'gatsby';

export const useAlbumsNames = () => {
  const data = useStaticQuery(graphql`
  query AlbumsNamesQuery {
    allWpPost {
      edges {
        node {
          id
          title
        }
      }
    }
  }
  
  `);
  return data;
};