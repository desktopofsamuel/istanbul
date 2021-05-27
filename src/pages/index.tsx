import React from 'react';
import { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import Title from '@/components/Title';
import PersonList from '@/components/PersonList';

const Home: React.FC<PageProps> = ({ data }) => {
  const list = data.PeopleList.edges;
  return (
    <main>
      <Title />
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/juxtdesignco">@juxtdesignco</a>)
      </p>
      <h3>People</h3>
      <PersonList data={list} />
    </main>
  );
};

export default Home;

export const pageQuery = graphql`
  query PeopleQuery {
    PeopleList: allAirtable(filter: { table: { eq: "People" } }) {
      edges {
        node {
          ...people
        }
      }
    }
  }
`;
