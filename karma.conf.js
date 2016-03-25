module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/bower_components/underscore/underscore.js',
            'app/bower_components/jquery/dist/jquery.js',
            'app/bower_components/backbone/backbone.js',
            'app/lib/**/*.js',
            'app/view*/**/*.js'
        ],

        reporters:        ['mocha'],

        autoWatch: true,

        frameworks: ['jasmine-ajax', 'jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-jasmine-ajax',
            'karma-mocha-reporter',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
