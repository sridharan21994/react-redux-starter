const CracoLessPlugin = require('craco-less');
const { darkTheme } = require('@ant-design/dark-theme');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
                ...darkTheme,
                '@border-radius-base': '4px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  eslint: {
    enable: false,
  },
};