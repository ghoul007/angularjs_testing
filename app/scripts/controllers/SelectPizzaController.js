angular
  .module('pizzaStore')
  .controller('SelectPizzaController', function($scope, $location) {
    $scope.choices = ['canadian', 'pepperoni', 'vegetarian'];
    $scope.pizzaType = '';

    $scope.orderInProgress = false;
    $scope.placeOrder = function() {
        $location.path('/checkout');
    };
  });
