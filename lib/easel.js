
module.exports = function(options) {

    this.config = require('./config')(options || {});
    this.models = require('./adapters')(this);
    this.server = require('./server')(this);

};
