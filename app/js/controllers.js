'use strict';

/* Controllers */
 
angular.module('oatmail.controllers', []).
  controller('HeaderCtrl', ['$scope', '$routeParams', function(sc, rp) {

  }])
  .controller('MailAreaCtrl', ['$scope', function(sc) {
    
    
  }])
  .controller('ViewCtrl', ['$scope', '$routeParams', function(sc, rp) {
    sc.message = "Viewing email with id: " + rp.emailId;
  }])
  .controller('ComposeCtrl', ['$scope', function(sc) {
    sc.message = "Composing email";
  }])
  .controller('ForwardCtrl', ['$scope', '$routeParams', function(sc, rp) {
    sc.message = "Forwarding email with id: " + rp.emailId;
  }])
  .controller('ReplyCtrl', ['$scope', '$routeParams', function(sc, rp) {
    sc.message = "Replying to email with id: " + rp.emailId;
  }])
  .controller('ReplyAllCtrl', ['$scope', '$routeParams', function(sc, rp) {
    sc.message = "Reply all'ing to email with id: " + rp.emailId;
  }]);
