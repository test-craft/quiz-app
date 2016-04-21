'use strict';

module.exports = angular.module('prize')
    .config(['$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('core.prize', {
                    url: '/prize',
                    views : {
                        core : {
                            templateUrl: '/app/modules/prize/partials/prize.partial.html',
                            controller: 'prizeController as prizeController'
                        }
                    }
                });
        }
    ]);



