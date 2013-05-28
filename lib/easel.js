
var _ = require('lodash');
var includeAll = require('include-all');
var fs = require('fs');


var Easel = module.exports = function(options) {

    options = options || {};

    global.APP_PATH    = options.APP_PATH    || process.cwd();
    global.CONFIG_PATH = options.CONFIG_PATH || APP_PATH + '/config';
    global.TMP_PATH    = options.TMP_PATH    || APP_PATH + '/.tmp';

    this.config = this.getConfig('application', options);

};


Easel.prototype.loadModule = function(name, options) {

    options = options || {};

    var config = this.getConfig(name, options);

    this[name] = require('./' + name)(this, config);

};


Easel.prototype.getConfig = function(name, options) {

    this._userConfig = this._userConfig || this.getUserConfig();

    var defaults = {};
    var module = __dirname + '/' + name;

    if (fs.existsSync(module)) {
        defaults = includeAll({
            dirname: module,
            filter: /(.+)\.config\.js$/
        })['default'];
    }

    console.log(name, _.extend({}, defaults, this._userConfig[name], options));

    return _.extend({}, defaults, this._userConfig[name], options);

};


Easel.prototype.getUserConfig = function() {

    _.extend(this.paths, {

        assets          : this.paths.app + '/app/assets',
        javascripts     : this.paths.app + '/app/assets/javascripts',
        stylesheets     : this.paths.app + '/app/assets/stylesheets',

        controllers     : this.paths.app + '/app/controllers',
        models          : this.paths.app + '/app/models',
        views           : this.paths.app + '/app/views',
        layouts         : this.paths.app + '/app/views/layouts',
        // services        : this.paths.app + '/app/services',
        // policies        : this.paths.app + '/app/policies',
        // adapters        : this.paths.app + '/app/adapters',

        'public'        : this.paths.app + '/public',
        // templates       : this.paths.app + '/assets/templates',
        // dependencies    : this.paths.app + '/dependencies',

        routesFile      : this.paths.config + '/routes.js'
        // policiesFile    : this.paths.config + '/policies.js'

    });

    return includeAll({
        dirname: this.paths.config,
        filter: /(.+)\.js$/
    });

};


Easel.prototype.start = function(options) {

    this.loadModule('server', options);

    this.server.start(this.server.stop);

};


Easel.prototype.stop = function() {

    this.server.stop();

};
