'use strict';

module.exports = angular.module('question').controller('questionController', ['$log', 'questionService',
    function($log, questionService){
        $log.info('Question Controller Loaded');

    }
]);