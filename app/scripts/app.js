angular
    .module('pizzaStore', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {

    $routeProvider.when('/',{
        templateUrl : '../app/views/main.html',
        controller : 'storeController'
    })
});