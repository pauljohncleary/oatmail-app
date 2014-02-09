'use strict';

/* Controllers */

angular.module('oatmail.controllers', []).
  controller('HeaderCtrl', [function($scope) {

  }])
  .controller('MailAreaCtrl', [function($scope) {
    
    
  }])
  .controller('ComposeCtrl', [function($scope) {
    $scope.message = 'This is compose view';
  }])
  .controller('ViewCtrl', [function($scope) {
    $scope.message = 'This is view email view';
  }]);