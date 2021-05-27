import React from 'react';
import { Link } from 'gatsby';

const PersonList: React.FC = ({ data }) => {
  return (
    <div>
      {data.map((node) => (
        <Link to={`/person/${node.node.data.Slug}`}>
          <p>{node.node.data.Person}</p>
        </Link>
      ))}
    </div>
  );
};

export default PersonList;
