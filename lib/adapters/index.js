
var _ = require('lodash');


module.exports = function(app, options) {

    return {

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
                return {
                    adapter: {
                        name: adapter.module || name,
                        config: _.clone(adapter)
                    }
                };
            }

        }

    };

};
