
var _ = require('lodash');
var includeAll = require('include-all');

module.exports = function(app, options) {

    var models = {};

    return {

        models: models,

        loadAll: function() {

            var files = includeAll({
                dirname: app.config.paths.models,
                filter: /(.+)\.js$/
            });

            _.each(files, function(model, name) {
                name = name[0].toUpperCase() + name.slice(1).toLowerCase();
                models[name] = model;
            });

        }

    };

};
