import { graphql } from 'gatsby';

export const PeopleFragment = graphql`
  fragment people on Airtable {
    table
    data {
      Person
      Persondescription
      Personphoto {
        url
      }
      Books {
        data {
          Bookname
          Booklink
          Bookauthor
        }
      }
    }
  }
`;
