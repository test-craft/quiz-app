'use strict';

module.exports = angular.module('question').controller('answerDirectiveController', ['$scope', '$log',
    'questionService', '$timeout', '$rootScope',
    function($scope, $log, questionService, $timeout, $rootScope){
        var _this = this;
        this.question = $scope.question;
        this.answered = false;
        this.displayAnswer = false;

        var TIMEOUT = 2000;

        $rootScope.$on('onDisplayAnswer', function(){
            if (questionService.getAnswer($scope.outerIndex) === $scope.index){
                _this.displayAnswer = true;

                $timeout(function() {
                    _this.displayAnswer = false;
                }, TIMEOUT);
            }
        });

        this.answeredQuestion = function() {
            this.rightAnswer = questionService.checkRightAnswer($scope.index, $scope.outerIndex);
            if (this.rightAnswer) {
                questionService.updateRightAnswersCounter();
            } else {
                $rootScope.$broadcast('onDisplayAnswer');
            }

            this.answered = true;
            $timeout(function() {
                _this.answered = false;
            }, TIMEOUT);

            $scope.onAnswer();
        }
    }
]);