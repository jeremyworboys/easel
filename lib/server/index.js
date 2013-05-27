
var version = require('../../package.json').version;
var express = require('express');
var http = require('http');


module.exports = function() {

    var server;
    var started = false;
    var app = this;


    function getServer() {

        server || (server = express());

        return server;

    }


    function isStarted() {

        return started;

    }


    function startServer() {

        if (started) return;

        var host = app.config.host;
        var port = app.config.port;
        var env = app.config.env;

        http.createServer(server).listen(port, host, function() {
            console.log();
            console.log('Easel v' + version);
            console.log('Easel started server on port ' + port + ' in ' + env + ' mode');
            console.log('Check it http://' + host + ':' + port + ' to see your app!');
        });

    }


    function stopServer() {

        if (!started) return;

        server.close();

    }


    return {
        server: getServer,
        isStarted: isStarted,
        start: startServer,
        stop: stopServer
    };


};
