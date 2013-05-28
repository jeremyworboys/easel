
var _ = require('lodash');
var Schema = require('jugglingdb').Schema;


module.exports = function(app, options) {

    var schemas = {};

    return {

        bindModels: function(models) {

            _.each(models, _.bind(this.bindModel, this));

        },

        bindModel: function(model, name) {

            var schema = this.getSchema(model.adapter.name, model.adapter.config);

            var Model = schema.define(name, model.schema, model.settings);

            if (global[name]) console.warn('Overwriting global ' + name + ' with model.');
            global[name] = Model;

        },

        getSchema: function(name, options) {

            if (schemas[name]) return schemas[name];

            return (schemas[name] = new Schema(name, options));

        }

    };

};
