'use strict';

module.exports = angular.module('question').controller('resultsController', ['$scope', '$log',
    'questionService', '$state', '$stateParams',
    function($scope, $log, questionService, $state, $stateParams){
        var _this = this;
        this.winnerLevel = $stateParams.winnerLevel;

        this.moveToPrize = function() {
            $state.go('core.prize', $stateParams);
        }
    }
]);