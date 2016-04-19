'use strict';

module.exports = angular.module('question').factory('questionService', ['$q',
    function($q){
        var questions = [
            {
                question : 'Is this a question?',
                options : ['Yes', 'No', 'Why not', 'Sure'],
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