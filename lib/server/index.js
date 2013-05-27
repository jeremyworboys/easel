
var version = require('../../package.json').version;
var express = require('express');
var http = require('http');


module.exports = function(app) {

    var server = express();
    var started = false;


    function serverStarted() {

        return started;

    }


    function startServer(cb) {

        if (started) return;

        var host = app.config.host;
        var port = app.config.port;
        var env = app.config.environment;

        started = true;
        server = http.createServer(server).listen(port, host, function() {
            console.log();
            console.log('Easel v' + version);
            console.log('Easel started server on port ' + port + ' in ' + env + ' mode');
            console.log('Check it http://' + host + ':' + port + ' to see your app!');
            cb && cb();
        });

    }


    function stopServer(cb) {

        if (!started) return;

        started = false;
        server.close(function() {
            cb && cb();
        });

    }


    return {
        server: server,
        started: serverStarted,
        start: startServer,
        stop: stopServer
    };


};
