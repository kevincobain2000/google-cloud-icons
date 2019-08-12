const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

let exports1 = withCSS(withSass());
let exports2 = {
  assetPrefix: "/google-cloud-icons/"
};

module.exports = { ...exports1, ...exports2 };
