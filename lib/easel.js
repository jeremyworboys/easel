
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

    return includeAll({
        dirname: CONFIG_PATH,
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
