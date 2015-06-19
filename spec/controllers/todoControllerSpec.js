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

  it('deletes todo item at a given position', function() {
    scope.todoList = [{ item: 'item 1' }, { item: 'item 2' }, { item: 'item 3'}];
    expect(scope.todoList[1].item).toEqual('item 2')
    scope.removeItem(1);
    expect(scope.todoList[1].item).toEqual('item 3')
    expect(scope.todoList.length).toBe(2);
  });
});
