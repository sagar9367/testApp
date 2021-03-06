// 'use strict';
//
// /* Directives */
//
// var testDirective = angular.module("testDirective", []);
//
// testDirective.directive('test', ["Question", "$scope", function(Question, $scope) {
// 	return {
// 		restrict: 'E',
// 		scope: {},
// 		templateUrl: 'templates/question.html',
// 		link: function(scope, elem, attrs) {
// 			scope.start = function() {
// 				scope.id = 0;
// 				scope.quizOver = false;
// 				scope.inProgress = true;
// 				scope.getQuestion();
// 			};
//
// 			scope.reset = function() {
// 				scope.inProgress = false;
// 				scope.score = 0;
// 			}
//
// 			scope.getQuestion = function() {
// 				var q = Question.getQuestion(scope.id);
// 				if(q) {
// 					scope.question = q.question;
// 					scope.options = q.options;
// 					scope.answer = q.answer;
// 					scope.answerMode = true;
// 				} else {
// 					scope.quizOver = true;
// 				}
// 			};
//
// 			scope.checkAnswer = function() {
// 				if(!$('input[name=answer]:checked').length) return;
//
// 				var ans = $('input[name=answer]:checked').val();
//
// 				if(ans == scope.options[scope.answer]) {
// 					scope.score++;
// 					scope.correctAns = true;
// 				} else {
// 					scope.correctAns = false;
// 				}
//
// 				scope.answerMode = false;
// 			};
//
// 			scope.nextQuestion = function() {
// 				scope.id++;
// 				scope.getQuestion();
// 			}
//
// 			scope.reset();
// 		}
// 	}
// }]);
