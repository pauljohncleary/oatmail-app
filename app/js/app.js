'use strict';


// Declare app level module which depends on filters, and services
angular.module('oatmail', [
  'ngRoute',
  'oatmail.filters',
  'oatmail.services',
  'oatmail.directives',
  'oatmail.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/head.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/sidebar.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
