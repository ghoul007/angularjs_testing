module.exports = function(config) {
  config.set({
    'frameworks': ['jasmine'],
    'browsers': ['Firefox'],
    'files': [
      // 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular.js',
      // 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular-route.js',
      // 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-mocks.js',
      // 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular-resource.js',
      //
      // 'app/scripts/app.js',
      // 'app/scripts/services/OrderService.js',
      // 'app/scripts/directives/accordionDirective.js',
      // 'app/scripts/directives/orderStatusDirective.js', // section 4.3.3
      // 'app/scripts/controllers/SelectPizzaController.js',
      // 'app/scripts/controllers/OrderStatusController.js',

      'spec/unit/*.js'
    ]
  });
};
