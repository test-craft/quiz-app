'use strict';

module.exports = angular.module('splash').controller('splashController', ['$log', '$interval', '$state',
    function($log, $interval, $state){
        $log.info('Splash Controller Loaded');

        $interval(function(){
            $state.go('core.question.info');
        }, 2500, 1);
    }
]);