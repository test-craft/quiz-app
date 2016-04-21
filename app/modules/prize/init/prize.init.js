
'use strict';

require('../style/prize.style.scss');

module.exports = function(prizeModule){
    return  {
        routes : [
            require('../routes/prize.route.js')
        ],
        controllers : [
            require('../controllers/prize.controller')
        ]
    };
};