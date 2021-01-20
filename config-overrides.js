// This config requires rewire-react-app to be installed
// yarn add -D rewire-react-app
//
// Also see updates to the script commands in the package.json file
//

module.exports = (config) => {
  config.module.rules.push({
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    use: [
      {
        loader: "astroturf/loader",
        options: { extension: ".module.scss", enableCssProp: true },
      },
    ],
  });
  return config;
};
