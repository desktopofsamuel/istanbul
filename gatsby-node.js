const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { kebabCase } = require('lodash.kebabcase');
const path = require('path');

const query = ` 
{
  person: allAirtable {
    edges {
      node {
        data {
          Slug
        }
      }
    }
  }
}
`;

const personPage = path.resolve('src/templates/person.tsx');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const response = await graphql(query);
  if (response.errors) throw new Error(response.errors);
  const { person } = response.data;

  person.edges.forEach(({ node }, index, arr) => {
    const slug = node.data.Slug;
    createPage({
      path: `/person/${slug}/`,
      component: personPage,
      context: {
        // id: node.ID,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
