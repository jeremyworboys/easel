
var _ = require('lodash');
var includeAll = require('include-all');


module.exports = function(app, options) {

    return {

        load: function(name) {

            console.log('Loading ' + name + ' adapter');
            // app.adapters[name] =

        },

        bindModels: function(models) {

            _.each(models, _.bind(this.bindModel, this));

        },

        bindModel: function(model) {

            _.extend(model, this.getAdapter(model.adapter));

        },

        getAdapter: function(adapter, name) {

            if (!adapter) return this.getAdapter(app.config.adapters['default'], 'default');

            if (_.isString(adapter)) return this.getAdapter(app.config.adapters[adapter], adapter);

            if (_.isObject(adapter)) {
                adapter = _.clone(adapter);
                adapter.adapter = adapter.module || name;
                delete adapter.module;
                return adapter;
            }

        }

    };

};
