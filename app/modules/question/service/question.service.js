'use strict';

module.exports = angular.module('question').factory('questionService', ['$q', '$http',
    function($q, $http){
        var counter = 0;
        var rightAnswersCounter = 0;

        var questions = [];

        var index = 0;

        return {
            loadQuestions : function(){
                return $http.get('http://test-yourself.testcraft.io/questions.json').then(function(response){
                    questions = response.data;

                    return questions[0];
                });
            },

            getNextQuestion : function() {
                counter++;
                if (index >= questions.length){
                    return $q.reject();
                }

                var question = questions[index];
                index++;
                return $q.resolve(question);
            },

            checkRightAnswer : function(answerIndex, questionIndex) {
                return questions[questionIndex].answer === answerIndex;
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