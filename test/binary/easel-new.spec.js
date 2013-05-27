
var exec = require('child_process').exec;
var fs = require('fs');
var wrench = require('wrench');


describe('easel', function() {

    var easelBin = './bin/easel';

    describe('new <name>', function() {

        var appName = 'testApp';

        it('should create a new application in a new directory', function(done) {
            exec(easelBin + ' new ' + appName, function(err, stdout) {
                if (err) return done(err);
                stdout.should.include('Creating');
                checkScaffoldNew(appName).should.be.ok;
                done();
            });
        });

        it('should not create a new application in an existing directory', function(done) {
            exec('mkdir ' + appName, function(err) {
                if (err) done(err);
                exec(easelBin + ' new ' + appName, function(err, stdout, stderr) {
                    stderr.should.include('already exists');
                    err.code.should.be.truthy;
                    done();
                });
            });
        });

        beforeEach(function(done) {
            fs.exists(appName, function(exists) {
                if (exists) {
                    wrench.rmdirSyncRecursive(appName);
                }
                done();
            });
        });

        afterEach(function(done) {
            fs.exists(appName, function(exists) {
                if (exists) {
                    wrench.rmdirSyncRecursive(appName);
                }
                done();
            });
        });
    });
});


function checkScaffoldNew(appName) {
    var expectedFiles = JSON.stringify([
        'app',
        'app/assets',
        'app/assets/javascripts',
        'app/assets/javascripts/application.js',
        'app/assets/javascripts/vendor',
        'app/assets/javascripts/vendor/.gitkeep',
        'app/assets/stylesheets',
        'app/assets/stylesheets/application.css.styl',
        'app/controllers',
        'app/controllers/application_controller.js',
        'app/models',
        'app/models/.gitkeep',
        'app/views',
        'app/views/application',
        'app/views/application/index.html.hbs',
        'app/views/layouts',
        'app/views/layouts/application.hbs',
        'config',
        'config/application.js',
        'config/environments',
        'config/environments/all.js',
        'config/environments/development.js',
        'config/environments/production.js',
        'config/environments/test.js',
        'config/initializers',
        'config/initializers/session.js',
        'config/routes.js',
        'public',
        'public/favicon.ico',
        'public/robots.txt',
        'test',
        'test/.jshintrc',
        'test/mocha.opts',
        '.editorconfig',
        '.gitattributes',
        '.gitignore',
        '.jshintrc',
        '.npmignore',
        'index.js',
        'LICENSE',
        'Makefile',
        'package.json',
        'README.md'
    ].sort());

    var files = JSON.stringify(wrench.readdirSyncRecursive(appName).sort());

    return files === expectedFiles;
}
