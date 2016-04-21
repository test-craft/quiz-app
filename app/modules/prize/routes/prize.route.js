'use strict';

module.exports = angular.module('prize')
    .config(['$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('core.prize', {
                    url: '/prize',
                    views : {
                        question : {
                            templateUrl: '/app/modules/prize/partials/prize.partial.html',
                            controller: 'prizeController as prizeController'
                        }
                    },
                    params: { winnerLevel: '' }
                });
        }
    ]);



