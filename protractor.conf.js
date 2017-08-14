exports.config = {
    rootElement: '.my-app',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'spec/end2end/**/*.js'
  ],
  capabilities: {
    browserName: 'chrome'
  },

  baseUrl: 'http://localhost:8787/'
};
