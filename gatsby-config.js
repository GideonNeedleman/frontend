//gatsby-config.js
require("dotenv").config({
  path: `.env`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  collectionTypes: ["post", "category", "author"],
  // accessToken: process.env.STRAPI_TOKEN,
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    "gatsby-transformer-remark",
  ],
};
