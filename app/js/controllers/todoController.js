(function() {
  angular.module('todoApp')
    .controller('TodoController', ['$scope', function($scope) {
      $scope.newTodoItem = '';
      $scope.todoList = [];

      $scope.addItem = function() {
        $scope.todoList.push({ 'item': $scope.newTodoItem });
        $scope.newTodoItem = '';
      };

      $scope.removeItem = function(index){
        $scope.todoList.splice(index, 1);
      }
    }]);
})();
