'use strict';

module.exports = angular.module('question').factory('questionService', ['$q',
    function($q){
        var counter = 0;
        var rightAnswersCounter = 0;

        var questions = [
            {
                question : 'Who said, "100% of the shots you don\'t take don\'t go in"',
                options  : [
                    { answer: 'Wayne Gretzky', id: 0 },
                    { answer: 'Michael Jordan', id: 1 },
                    { answer: 'Larry Bird', id: 2 },
                    { answer: 'You', id: 3 }
                ],
                answer   : 0,
                index    : 0
            },
            {
                question : 'Who said, "An eye for an eye only ends up making the whole world blind"?',
                options  : [
                    { answer: 'Mother Teresa', id: 0 },
                    { answer: 'M.K. Gandhi', id: 1 },
                    { answer: 'Thomas Edison', id: 2 },
                    { answer: 'Me', id: 3 }
                ],
                answer   : 0,
                index    : 1
            }
        ];

        var index = 0;

        return {
            getNextQuestion : function() {
                counter++;
                if (index >= questions.length){
                    index = 0;
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