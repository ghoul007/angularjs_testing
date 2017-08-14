describe('Select Pizza controller', function() {
  var scope;
  var ctrl;
  var mockOrderService;

  beforeEach(module('pizzaStore'));
  beforeEach(function() {
    mockOrderService = jasmine.createSpyObj('OrderService', ['placeOrder']);
    inject(function($q) {
      mockOrderService.placeOrder.and.returnValue($q.when({}));
    });
  });
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('SelectPizzaController', {
      $scope: scope,
      OrderService: mockOrderService
    });
  }));

  describe('$scope.placeOrder', function() {
    it('lets the user place an order when they select a pizza type', function() {
      scope.pizzaType = scope.choices[0];
      scope.placeOrder();
      expect(mockOrderService.placeOrder).toHaveBeenCalled();
    });

    it('stops a user from placing an order when they have not selected a pizza type', function() {
      scope.pizzaType = '';
      scope.placeOrder();
      expect(mockOrderService.placeOrder).not.toHaveBeenCalled();
    });
  });
});
