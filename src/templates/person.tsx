import React from 'react';
import { graphql, Link } from 'gatsby';

const PersonTemplate = ({ data, pageContext }) => {
  const Person = data.airtable.data;
  const BookList = Person.Books;

  return (
    <main>
      <h1>Readlist of {Person.Person}</h1>
      <p>{Person.Persondescription}</p>
      <ul>
        {BookList.map((ne) => (
          <li>
            <Link to={ne.data.Booklink}>{ne.data.Bookname}</Link> by{` `}
            {ne.data.Bookauthor}
          </li>
        ))}
      </ul>
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
