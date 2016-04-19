'use strict';

module.exports = angular.module('splash')
    .config(['$stateProvider',
       function($stateProvider) {
           $stateProvider
               .state('core.splash', {
                   url: '/splash',
                   views : {
                       core : {
                           templateUrl: '/app/modules/splash/partials/splash.partial.html',
                           controller: 'splashController as splashController'
                       }
                   }
               });
       }
    ]);