'use strict';

require('../style/splash.style.scss');

module.exports = function(splashModule){
    return  {
        routes : [
            require('../routes/splash.route.js')
        ],
        controllers : [
            require('../controllers/splash.controller')
        ]
    };
};