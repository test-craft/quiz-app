
'use strict';

module.exports = angular.module('question').directive('answerDirective',[
    function(){
        return {
            restrict : 'E',
            template : require('../partials/answer-directive.partial.html'),
            controller : 'answerDirectiveController',
            controllerAs : 'answerDirectiveController',
            scope : {
                answer : '=',
                index : '=',
                onAnswer : '='
            }
        }
    }
]);