'use strict';

module.exports = angular.module('question').controller('answerDirectiveController', ['$scope', '$log',
    'questionService', '$timeout',
    function($scope, $log, questionService, $timeout){
        var _this = this;
        this.question = $scope.question;
        this.answered = false;

        this.answeredQuestion = function() {
            this.rightAnswer = questionService.checkRightAnswer($scope.index, $scope.outerIndex);
            if (this.rightAnswer) {
                questionService.updateRightAnswersCounter();
            }
            this.answered = true;
            $timeout(function() { _this.answered = false; }, 500);
            $scope.onAnswer();
        }
    }
]);