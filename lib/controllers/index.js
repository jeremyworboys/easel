
var _ = require('lodash');
var includeAll = require('include-all');
var Controller = require('./Controller');


module.exports = function(app, options) {

    var controllers = {};

    return {

        controllers: controllers,

        loadControllers: function() {

            var config = {
                dirname: app.config.paths.controllers,
                filter: /(.+)Controller\.js$/
            };

            _.each(includeAll(config), _.bind(this.loadController, this));

            return controllers;

        },

        loadController: function(controller, name) {

            name = name[0].toUpperCase() + name.slice(1).toLowerCase();

            controllers[name] = _.extend(_.clone(Controller), controller);

        }

    };

};
