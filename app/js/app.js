'use strict';

/* App Module */

var testApp = angular.module('testApp', [
  'ngRoute',
  'testControllers',
  'testServices',
  'testFilter'
]);

testApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/question.html',
        controller: 'questionCtrl'
      });
  }]);
