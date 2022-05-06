import { graphql, useStaticQuery } from 'gatsby';

export const useContactsData = () => {
  const data = useStaticQuery(graphql`
  query ContactsPageQuery {
    allWpPage(filter: {databaseId: {eq: 26}}) {
      edges {
        node {
          contactPageAcf {
            emails
            phones
            socialMedia
            contactPageHeader
          }
        }
      }
    }
  }
  
  `);
  return data;
};