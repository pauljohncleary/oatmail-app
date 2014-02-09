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
  $routeProvider.when('/', {templateUrl: 'partials/mailbox.html', controller: 'MailAreaCtrl'});
  $routeProvider.when('/view/:id', {templateUrl: 'partials/view.html', controller: 'ViewCtrl'});  
  $routeProvider.when('/compose', {templateUrl: 'partials/compose.html', controller: 'ComposeCtrl'});
  $routeProvider.when('/forward/:id', {templateUrl: 'partials/compose.html', controller: 'ComposeCtrl'});
  $routeProvider.when('/reply/:id', {templateUrl: 'partials/compose.html', controller: 'ComposeCtrl'});  
  $routeProvider.when('/replyAll/:id', {templateUrl: 'partials/compose.html', controller: 'ComposeCtrl'});    
  $routeProvider.otherwise({redirectTo: '/'});
}]);
