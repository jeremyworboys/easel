
var _ = require('lodash');
var includeAll = require('include-all');


module.exports = function(app, options) {

    return {

        loadAll: function() {

            var models = app.models.models = includeAll({
                dirname: app.config.paths.models,
                filter: /(.+)\.js$/
            });

            _.each(models, function(model, name) {
                name = name[0].toUpperCase() + name.slice(1);

                if (global[name]) {
                    console.warn('Can not define global model ' + name + '.');
                }
                global[name] = model;
            });

        }

    };

};
