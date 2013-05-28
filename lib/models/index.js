
var includeAll = require('include-all');


module.exports = function(app, options) {

    return {

        loadAll: function() {

            var models = includeAll({
                dirname: app.config.paths.models,
                filter: /(.+)\.js$/
            });

            console.log(models)

        }

    };

};
