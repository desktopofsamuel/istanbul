import { graphql } from 'gatsby';

export const PeopleFragment = graphql`
  fragment people on Airtable {
    table
    data {
      Person
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
