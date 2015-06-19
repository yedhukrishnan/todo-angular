(function() {
  angular.module('todoApp')
    .controller('TodoController', ['$scope', function($scope) {
      $scope.someValue = 'somevalue';
    }]);
})();
