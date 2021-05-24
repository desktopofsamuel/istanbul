require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `appsnSWeg7cl7KSJu`,
            tableName: `Books`,
            queryName: 'Books',
            mapping: { Bookdescription: 'text/markdown' },
            tableLinks: [`People`],
          },
          {
            baseId: `appsnSWeg7cl7KSJu`,
            tableName: `People`,
            queryName: 'People',
            tableLinks: [`Books`],
            // queryName: `Bookmark`,
            // separateNodeType: true,
          },
        ],
      },
    },
  ],
};
