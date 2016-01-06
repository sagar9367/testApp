'use strict';

/* Services */

var testServices = angular.module('testServices', []);

testServices.factory('Question', function($http) {
  var factory = [];
  factory.getQuestions = function() {
    return $http.get("data/TEST_20_01_01.xml");
  }
  return factory;
});
