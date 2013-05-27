
module.exports = function(options) {

    this.config = require('./config')(options || {});
    this.server = require('./server')(this);

};
