exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'spec/end2end/**/*.js'
  ],
  capabilities: {
    browserName: 'firefox'
  },

  baseUrl: 'http://localhost:8787/'
};
