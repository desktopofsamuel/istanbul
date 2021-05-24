import React from 'react';
import { graphql } from 'gatsby';

const PersonTemplate = ({ data, pageContext }) => {
  const next = data.airtable.data;
  const BookList = next.Books;

  console.log(data);
  return (
    <main>
      <h1>Readlist of {next.Person}</h1>

      {BookList.map((ne) => (
        <p>
          {ne.data.Bookname} by {ne.data.Bookauthor}
        </p>
      ))}
    </main>
  );
};

export default PersonTemplate;

export const pageQuery = graphql`
  query MyQuery($slug: String) {
    airtable(table: { eq: "People" }, data: { Slug: { eq: $slug } }) {
      ...people
    }
  }
`;
