
var _ = require('lodash');
var includeAll = require('include-all');


module.exports = function(app) {

    var adapters = includeAll({
        dirname: app.config.paths.adapters,
        filter: /(.+)\.js$/
    });

    console.log(adapters);

};
