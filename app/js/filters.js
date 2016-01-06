"use strict";

var testFilter = angular.module('testFilter', [])

testFilter.filter('removeHtmlTags', function() {
  return function(input) {
    return input.replace(/(<([^>]+)>)/ig, "");
  };
});
