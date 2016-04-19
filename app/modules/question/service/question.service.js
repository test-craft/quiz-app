'use strict';

module.exports = angular.module('question').factory('questionService', ['$q',
    function($q){
        var questions = [
            {
                question : 'Who said, "100% of the shots you don\'t take don\'t go in"',
                options : ['Wayne Gretzky', 'Michael Jordan', 'Larry Bird', 'You'],
                answer : 0
            },
            {
                question : 'Who said, "An eye for an eye only ends up making the whole world blind"?',
                options : ['Mother Teresa', 'M.K. Gandhi', 'Thomas Edison', 'Me'],
                answer : 0
            }
        ];

        var index = 0;

        return {
            getNextQuestion : function(){
                if (index >= questions.length){
                    index = 0;
                }

                var question = questions[index];
                index++;
                return $q.resolve(question);
            }
        }
    }
]);