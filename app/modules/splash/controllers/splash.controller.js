'use strict';

module.exports = angular.module('splash').controller('splashController', ['$log', '$timeout', '$state',
    function($log, $timeout, $state){
        $log.info('Splash Controller Loaded');

        $timeout(function(){
            $state.go('core.question.info');
        }, 3000);
    }
]);