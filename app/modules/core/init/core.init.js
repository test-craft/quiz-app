'use strict';

// style
require('../style/core.scss');

module.exports = function(coreModule){
    return {
        config : [
            require('config'),
            require('../config/theme.config')
        ],
        controllers : [
            require('../controllers/core.controller')
        ]
    };
};