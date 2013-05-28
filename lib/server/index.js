
var version = require('../../package.json').version;
var express = require('express');
var http = require('http');


module.exports = function(app, options) {

    var started = false;


    return {

        server: null,

        started: function() {

            return started;

        },

        start: function(cb) {

            if (started) {
                console.warn('Easel Server has already started');
                return;
            }

            var host = options.host || app.config.host;
            var port = options.port || app.config.port;
            var env = options.environment || app.config.environment;

            started = true;
            app.server = http.createServer(express()).listen(port, host, function() {
                console.log();
                console.log('Easel v' + version);
                console.log('Easel started server on port ' + port + ' in ' + env + ' mode');
                console.log('Check it http://' + host + ':' + port + ' to see your app!');
                cb && cb();
            });

        },

        stop: function(cb) {

            if (!started) {
                console.warn('Easel Server hasn\'t started');
                return;
            }

            started = false;
            app.server.close(function() {
                cb && cb();
            });

        }

    };

};
