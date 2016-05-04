'use strict';

module.exports = angular.module('question').factory('questionService', ['$q', '$http',
    function($q, $http){
        var counter = 0;
        var rightAnswersCounter = 0;

        var questions = [];

        var index = 0;
        var startAt = 0;
        var isDone = false;

        return {
            loadQuestions : function(){
                //return $http.get('http://test-yourself.testcraft.io/questions.json').then(function(response){
                return $http.get('http://172.15.55.1:9999/questions.json').then(function(response){
                    questions = response.data;

                    index = Math.floor((Math.random() * 10) + 1);
                    startAt = index;


                    return questions[index];
                });
            },

            getNextQuestion : function() {
                if (isDone) {
                    return $q.reject();
                }

                counter++;
                var question = questions[index];
                index++;
                if (index >= questions.length){
                    index = 0;
                }

                if (index === startAt){
                    isDone = true;
                }
                return $q.resolve(question);
            },

            checkRightAnswer : function(answerIndex, questionIndex) {
                return questions[questionIndex].answer === answerIndex;
            },

            getAnswer : function(questionIndex) {
                return questions[questionIndex].answer;
            },

            getTotalQuestions : function() {
                return questions.length;
            },

            getCurrentQuestionIndex : function() {
                return index;
            },

            getQuestionCounter : function() {
                return counter;
            },

            updateRightAnswersCounter : function() {
                rightAnswersCounter++;
            },

            getRightAnswersCounter : function() {
                return rightAnswersCounter;
            }
        }
    }
]);