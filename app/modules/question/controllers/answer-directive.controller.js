'use strict';

module.exports = angular.module('question').controller('answerDirectiveController', ['$scope', '$log',
    function($scope, $log){
        var _this = this;
        this.question = $scope.question;
    }
]);