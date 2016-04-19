'use strict';
var questionModule = angular.module('question', []);

var question = require('./init/question.init')(questionModule);

module.exports = questionModule;


