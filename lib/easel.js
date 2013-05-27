
var _ = require('lodash');


var Easel = global.Easel = module.exports = function(options) {

    this.config = _.defaults(options || {}, {
        appPath: process.cwd(),
        host: '127.0.0.1',
        port: 3000,
        env: 'development'
    });

    _.extend(this,
        { server: require('./server').call(this) }
    );

};



    });




    });

};


Easel.prototype.start = function() {

    this.server.start();
    this.server.stop();

};
