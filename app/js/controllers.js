'use strict';

/* Controllers */

var testControllers = angular.module('testControllers', []);

testControllers.controller('questionCtrl', ['$scope', 'Question',
  function($scope, Question) {
    var xmlData,
        questionArray,
        index=0;

    Question.getQuestions().success(function(data) {
      xmlData  = x2js.xml_str2json(data);
      questionArray = xmlData.match_choose_otm.questions.question;
      $scope.question = questionArray[index];
    });

    // $scope.checkAnswer = function() {
    //
    // }

    $scope.nextQuestion = function() {
      if(index!==questionArray.length-1) {
        $scope.question = questionArray[++index];
      }
    }
}]);
