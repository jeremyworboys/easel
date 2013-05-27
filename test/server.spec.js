
describe('easel', function() {

    var app;
    var Easel = require('../lib/easel');

    beforeEach(function() {
        app = new Easel();
        app.config.port = 9999
    });

    describe('server.start()', function() {

        it('should start an Express server', function(done) {
            app.server.start(function() {
                app.server.started().should.be.true;
                app.server.stop(done);
            });
        });

    });

    describe('server.stop()', function() {

        it('should stop the server', function(done) {
            app.server.start(function() {
                app.server.started().should.be.true;
                app.server.stop(function() {
                    app.server.started().should.be.false;
                    done()
                });
            });
        });

    });

});
