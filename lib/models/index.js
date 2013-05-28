
var _ = require('lodash');
var includeAll = require('include-all');

module.exports = function(app, options) {

    var models = {};

    return {

        models: models,

        loadModels: function() {

            var config = {
                dirname: app.config.paths.models,
                filter: /(.+)\.js$/
            };

            _.each(includeAll(config), _.bind(this.loadModel, this));

            return models;

        },

        loadModel: function(model, name) {

            name = name[0].toUpperCase() + name.slice(1).toLowerCase();

            models[name] = model;

        }

    };

};
