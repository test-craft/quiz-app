'use strict';

module.exports = angular.module('prize').controller('prizeController', ['$scope', '$log', '$stateParams',
    function($scope, $log, questionService, $stateParams){
        var _this = this;
        this.winnerLevel = $stateParams.winnerLevel;
    }
]);