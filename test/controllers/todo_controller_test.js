describe('TodoController', function() {

  beforeEach(module('todoApp'));

  it('has somevalue', inject(function($controller) {
    var scope = {},
    ctrl = $controller('TodoController', { $scope:scope });
    expect(scope.someValue).toEqual('somevalue');
  }));

});
