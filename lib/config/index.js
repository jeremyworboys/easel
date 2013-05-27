
var _ = require('lodash');
var includeAll = require('include-all');


module.exports = function(options) {

    options.appPath = options.appPath || process.cwd();

    var paths = {
        app             : options.appPath,
        config          : options.appPath + '/config',
        tmp             : options.appPath + '/.tmp'
    };

    _.extend(paths, {

        assets          : paths.app + '/app/assets',
        javascripts     : paths.app + '/app/assets/javascripts',
        stylesheets     : paths.app + '/app/assets/stylesheets',

        controllers     : paths.app + '/app/controllers',
        models          : paths.app + '/app/models',
        views           : paths.app + '/app/views',
        layouts         : paths.app + '/app/views/layouts',
        // services        : paths.app + '/app/services',
        // policies        : paths.app + '/app/policies',
        // adapters        : paths.app + '/app/adapters',

        'public'        : paths.app + '/public',
        // templates       : paths.app + '/assets/templates',
        // dependencies    : paths.app + '/dependencies',

        routesFile      : paths.config + '/routes.js'
        // policiesFile    : paths.config + '/policies.js'

    });

    var defaults = {

        appName: 'Easel Application',

        port: 3000,

        host: 'localhost',

        environment: process.env.NODE_ENV || 'development',

        paths: paths,

        adapters: {
            'default':     'disk',
            memory: {
                module:    'easel-dirty',
                inMemory:  true
            },
            disk: {
                module:    'easel-dirty',
                filePath:  './.tmp/dirty.db',
                inMemory:  false
            },
            mongo: {
                module:    'easel-mongo',
                host:      'localhost',
                user:      'root'
            },
            redis: {
                module:    'easel-redis',
                host:      'localhost',
                user:      'root'
            },
            sqlite: {
                module:    'easel-sqlite',
                host:      'localhost',
                user:      'root'
            },
            mysql: {
                module:    'easel-mysql',
                host:      'localhost',
                user:      'root'
            }
        },

        cache: {
            maxAge: 31557600000  // 1000 years
        },

        session: {
            adapter: 'memory',
            key: 'easel.sid'
        }

    };

    var files = includeAll({
        dirname: defaults.paths.config,
        filter: /(.+)\.js$/
    });

    var config = {};

    _.extend(config, defaults, files.application, options);
    _.extend(config.database, files.database);
    _.extend(config, files.environments[config.environment]);

    return config;

};
