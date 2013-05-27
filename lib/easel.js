
var express = require('express');
var http = require('http');
var _ = require('lodash');


var Easel = global.Easel = module.exports = function(options) {

    this.app = express();

    this.config = _.defaults(options || {}, {
        appPath: process.cwd(),
        port: 3000
    });

};

Easel.prototype.startServer = function() {

    var port = this.config.port;

    this.server = http.createServer(this.app).listen(port, function() {
        console.log();
        console.log('Easel listening on http://localhost:' + port);
    });

};


Easel.prototype.stopServer = function() {

    this.server.close(function() {
        console.log('Easel shut down');
    });

};


Easel.prototype.start = function() {

    this.startServer();

};
