'use strict';

module.exports = angular.module('question').controller('questionInfoController', ['$log', 'questionService',
    function($log, questionService){
        $log.info('Question Info Controller Loaded');

        var _this = this;
        this.question = null;

        function init(){
            questionService.getNextQuestion().then(function(_question){
                _this.question = _question;
            });
        }
        init();

        this.onAnswer = function(answer){
            return init();
        };
    }
]);