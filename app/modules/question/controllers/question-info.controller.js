'use strict';

module.exports = angular.module('question').controller('questionInfoController', ['$scope', '$log', 'questionService', '$timeout',
    function($scope, $log, questionService, $timeout) {
        $log.info('Question Info Controller Loaded');

        var _this = this;
        this.question = {};
        this.reload = false;
        this.animationOn = false;

        function init() {
            _this.counter++;
            _this.animationOn = true;
            questionService.getNextQuestion().then(function(_question) {
                _this.reload = true;
                _this.question = _question;
                _this.index = _question.index;
                $timeout(function() { _this.reload = false; }, 1000);
            }, function(err){
                $scope.questionController.goToLastScreen();
            });
            $timeout(function() { _this.animationOn = false; }, 2000);
        }
        init();

        this.onAnswer = function() {
            $timeout(init, 2000);
        };
    }
]);