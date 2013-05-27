
var exec = require('child_process').exec;


describe('easel', function() {

    var easelBin = './bin/easel';

    it('should output help', function(done) {
        exec(easelBin, function(err, stdout) {
            if (err) return done(err);
            stdout.should.include('easel <command> [options]');
            stdout.should.include('--help');
            stdout.should.include('Commands:');
            stdout.should.include('new');
            done();
        });
    });
});
