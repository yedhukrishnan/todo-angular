'use strict';

angular.module('todoApp', ['ngRoute']);

angular.module('todoApp')
  .config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
      .when('/todos', {
        templateUrl: 'partials/todo.html',
        controller: 'TodoController'
      })
      .otherwise({
        redirectTo: '/todos'
      });
    }
]);
