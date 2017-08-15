angular
    .module('pizzaStore', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/select-pizza.html',
            controller: 'SelectPizzaController'
        })
        .when('/checkout', {
            templateUrl: 'views/checkout.html',
            controller: 'CheckoutController'
        })
});