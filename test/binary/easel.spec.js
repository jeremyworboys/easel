
var exec = require('child_process').exec;


describe('easel', function() {
    it('should output help', function(done) {
        exec('bin/easel', function(err, stdout) {
            if (err) return done(err);
            stdout.should.include('easel <command> [options]');
            stdout.should.include('--help');
            stdout.should.include('Commands:');
            stdout.should.include('new');
            done();
        });
    });
});
