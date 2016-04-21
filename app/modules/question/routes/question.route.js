'use strict';

module.exports = angular.module('question')
    .config(['$stateProvider',
       function($stateProvider) {
           $stateProvider
               .state('core.question', {
                   url: '/question',
                   abstract : true,
                   views : {
                       core : {
                           templateUrl: '/app/modules/question/partials/question.partial.html',
                           controller: 'questionController as questionController'
                       }
                   }
               })
               .state('core.question.info', {
                   url: '/info',
                   views : {
                       question : {
                           templateUrl: '/app/modules/question/partials/question-info.partial.html',
                           controller: 'questionInfoController as questionInfoController'
                       }
                   }
               })
               .state('core.question.results', {
                   url: '/results',
                   views : {
                       question : {
                           templateUrl: '/app/modules/question/partials/results.partial.html',
                           controller: 'resultsController as resultsController'
                       }
                   },
                   params: { winnerLevel: '' }
               });
       }
    ]);