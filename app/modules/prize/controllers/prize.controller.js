'use strict';

module.exports = angular.module('prize').controller('prizeController', [
    function(){

        this.status = ['Brainiac', 'Smarty', 'Genius'][Math.floor((Math.random() * 3))];
    }
]);