
var _ = require('lodash');


module.exports = function(options) {

    this.config = require('./config')(options || {});

    _.extend(this, {

        server: require('./server')(this)

    });

};
