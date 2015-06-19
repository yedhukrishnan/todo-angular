describe('TodoController', function() {
  var scope, controller;

  beforeEach(module('todoApp'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('TodoController', { $scope: scope });
  }));

  it('initializes an empty new todo list item', function() {
    expect(scope.newTodoItem).toEqual('');
  });

  it('creates a new todo item', function() {
    expect(scope.todoList.length).toBe(0);
    scope.addItem();
    expect(scope.todoList.length).toBe(1);
    expect(scope.newTodoItem).toEqual('');
  });

  it('deletes a todo item', function() {
    scope.todoList = [{ item: 'item 1' }];
    scope.removeItem();
    expect(scope.todoList.length).toBe(0);
  });
});
