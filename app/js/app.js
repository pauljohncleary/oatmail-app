'use strict';


// Declare app level module and routes
angular.module('oatmail', [
  'ngRoute',
  'oatmail.filters',
  'oatmail.services',
  'oatmail.directives',
  'oatmail.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/mailbox.html', controller: 'MailAreaCtrl'});
  $routeProvider.when('/view/:emailId', {templateUrl: 'partials/view.html', controller: 'ViewCtrl'});  
  $routeProvider.when('/compose', {templateUrl: 'partials/compose.html', controller: 'ComposeCtrl'});
  $routeProvider.when('/forward/:emailId', {templateUrl: 'partials/compose.html', controller: 'ForwardCtrl'});
  $routeProvider.when('/reply/:emailId', {templateUrl: 'partials/compose.html', controller: 'ReplyCtrl'});  
  $routeProvider.when('/replyall/:emailId', {templateUrl: 'partials/compose.html', controller: 'ReplyAllCtrl'});    
  $routeProvider.otherwise({redirectTo: '/'});
}]);
