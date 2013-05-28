
module.exports = {

    appName: 'Easel Application',

    port: process.env.PORT || 3000,

    host: 'localhost',

    environment: process.env.NODE_ENV || 'development',

    paths: {

        assets:          APP_PATH + '/app/assets',
        javascripts:     APP_PATH + '/app/assets/javascripts',
        stylesheets:     APP_PATH + '/app/assets/stylesheets',

        controllers:     APP_PATH + '/app/controllers',
        models:          APP_PATH + '/app/models',
        views:           APP_PATH + '/app/views',
        layouts:         APP_PATH + '/app/views/layouts',
        // services:        APP_PATH + '/app/services',
        // policies:        APP_PATH + '/app/policies',
        // adapters:        APP_PATH + '/app/adapters',

        'public':        APP_PATH + '/public',
        // templates:       APP_PATH + '/assets/templates',
        // dependencies:    APP_PATH + '/dependencies',

        routesFile:      CONFIG_PATH + '/routes.js'
        // policiesFile:    CONFIG_PATH + '/policies.js'

    }

};
