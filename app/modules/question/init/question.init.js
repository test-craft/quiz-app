
'use strict';

require('../style/question.style.scss');

module.exports = function(questionModule){
    return  {
        routes : [
            require('../routes/question.route.js')
        ],
        controllers : [
            require('../controllers/question.controller'),
            require('../controllers/question-info.controller'),
            require('../controllers/answer-directive.controller')
        ],
        services : [
            require('../service/question.service')
        ],
        directives : [
            require('../directives/answer-directive.directive')
        ]
    };
};