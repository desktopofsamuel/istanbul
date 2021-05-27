import React from 'react';
import { Link } from 'gatsby';

const PersonList: React.FC = ({ data }) => (
  <div>
    {data.map((node) => (
      <div>
        <Link to={`/person/${node.node.data.Slug}`}>
          <p>{node.node.data.Person}</p>
        </Link>
        <p>{node.node.data.Persondescription}</p>
      </div>
    ))}
  </div>
);

export default PersonList;
