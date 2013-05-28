
var _ = require('lodash');
var includeAll = require('include-all');
var fs = require('fs');


var Easel = module.exports = function(options) {

    options = options || {};

    global.APP_PATH    = options.APP_PATH    || process.cwd();
    global.CONFIG_PATH = options.CONFIG_PATH || APP_PATH + '/config';
    global.TMP_PATH    = options.TMP_PATH    || APP_PATH + '/.tmp';

    this.config = this.getConfig('application', options);
    this.config = _.extend(this.config, this.getEnvironmentConfig());

    // Update process in case it was modified in the config
    process.env.NODE_ENV = this.config.process;

};


Easel.prototype.loadModule = function(name, options) {

    options = options || {};

    this.config[name] = this.getConfig(name, options);

    this[name] = require('./' + name)(this, this.config[name]);

};


Easel.prototype.getConfig = function(name, options) {

    this._userConfig = this._userConfig || this.getUserConfig();

    var defaults = {};
    var module = __dirname + '/' + name;

    if (fs.existsSync(module)) {
        defaults = includeAll({
            dirname: module,
            filter: /(.+)\.config\.js$/
        }).defaults;
    }

    return _.extend({}, defaults, this._userConfig[name], options);

};


Easel.prototype.getUserConfig = function() {

    var config = includeAll({
        dirname: CONFIG_PATH,
        filter: /(.+)\.js$/
    });

    return config;

};


Easel.prototype.getEnvironmentConfig = function() {

    var envDir = CONFIG_PATH + '/environments';
    var environments = {};

    if (fs.existsSync(envDir)) {
        environments = includeAll({
            dirname: envDir,
            filter: /(.+)\.js$/
        });
    }

    return _.extend({}, environments['all'], environments[this.config.environment]);

};


Easel.prototype.start = function(options) {

    this.loadModule('models', options);
    this.models.loadAll();

    this.loadModule('adapters', options);
    this.adapters.bindModels(this.models);

    this.loadModule('server', options);
    this.server.start(_.bind(this.stop, this));

};


Easel.prototype.stop = function() {

    this.server.stop();

};
