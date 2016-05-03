'use strict';

module.exports = angular.module('question').controller('questionController', ['$log', 'questionService', 'moment',
    '$interval', '$state', '$stateParams',
    function($log, questionService, moment, $interval, $state, $stateParams){
        $log.info('Question Controller Loaded');

        this.seconds = 0;
        this.minutes = 0;
        var self = this;
        this.rightSectionText = 'Question';
        this.correctAnswersCounter = 0;
        this.hideDone = true;

        var duration = moment.duration({
            'seconds': 0,
            'minutes': 0
        });

        var timestamp = new Date(0,0,0,0,0,0);
        var interval = 1;

        var timer = $interval(function () {
            timestamp = new Date(timestamp.getTime() + interval*1000);

            duration = moment.duration(duration.asSeconds() + interval, 'seconds');

            self.seconds = Math.round(duration.asSeconds() % 60);
            self.minutes = Math.floor(duration.asSeconds() / 60);
            },
            1000
        );

        this.totalQuestions = questionService.getTotalQuestions();

        this.getCurrentQuestionIndex = function() {
            return questionService.getCurrentQuestionIndex();
        };

        this.getCorrectAnswers = function() {
            return questionService.getRightAnswersCounter();
        };

        this.getQuestionCounter = function() {
            //var tmp = questionService.getQuestionCounter();
            //if (tmp > self.totalQuestions) {
            //    self.goToLastScreen();
            //    return tmp;
            //}
            //else {
            //    return tmp;
            //}
            return questionService.getQuestionCounter();
        };

        this.goToLastScreen = function() {
            this.hideDone = false;
            $interval.cancel(timer);
            this.rightSectionText = 'Right Answers';
            self.correctAnswersCounter = questionService.getRightAnswersCounter();
            $stateParams.winnerLevel = getWinnerLevel();
            $state.go('core.question.results', $stateParams);
        };

        function getWinnerLevel() {
            if (self.correctAnswersCounter >= self.totalQuestions - 1) {
                return 'a';
            }
            else if (self.correctAnswersCounter >= self.totalQuestions - 3) {
                return 'b';
            }
            else if (self.correctAnswersCounter >= self.totalQuestions - 5) {
                return 'c';
            }
        }

    }
]);