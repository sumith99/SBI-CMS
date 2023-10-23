const path = require("path");
exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/context": path.resolve(__dirname, "src/context/"),
        "@/css": path.resolve(__dirname, "src/assets/css/"),
        "@/images": path.resolve(__dirname, "src/assets/images/"),
        "@/services": path.resolve(__dirname, "src/services/"),
        "@/store": path.resolve(__dirname, "src/store/"),
      },
    },
  });

  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
          {
            test: /react-pdf/,
            use: loaders.null(),
          },
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
};

const axios = require('axios');
const { env } = require("process");

exports.createPages = async ({ actions: { createPage } }) => {
  const pagesResponse = await axios.get(
    "http://127.0.0.1:1337/api/pages?locale=en&populate[blocks][populate]=members.picture,header,buttons.link,faq,featuresCheck,cards,pricingCards.perks,articles,restaurants,author.picture,images,cards.image,image&populate=localizations&populate[seo][populate]=metaSocial.image"
  );

  // Fetch data from the global endpoint
  const globalResponse = await axios.get(
    "http://127.0.0.1:1337/api/global?populate[navigation][populate]=*&populate[footer][populate][footerColumns][populate]=*"
  );

  const pagesData = pagesResponse.data.data;
  const globalData = globalResponse.data.data.attributes;
  console.log("pagesData", pagesData);

  pagesData.forEach(page => {
    console.log("page.slug", page);
    createPage({
      path: `${page.attributes.slug ? page.attributes.slug : '/'}`,
      component: require.resolve("./src/components/global-page.js"),
      context: {
        global: globalData,
        pageData: page,
      },
    });
  });
}