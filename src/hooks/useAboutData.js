import { graphql, useStaticQuery } from 'gatsby';

export const useAboutData = () => {
  const data = useStaticQuery(graphql`
  query AboutPageQuery {
    allWpPage(filter: {databaseId: {eq: 47}}) {
      edges {
        node {
          aboutPageAcf {
            aboutPageDesription
            aboutPageHeader
            aboutPagePhoto {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
  
  `);
  return data;
};