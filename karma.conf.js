// Karma configuration
// Generated on Sat Jan 11 2014 23:11:25 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [

    'tpc_flask/static/js/vendor/angular/angular.js',
    'tpc_flask/static/js/vendor/angular-route/angular-route.js',
    'tpc_flask/static/js/vendor/angular-mocks/angular-mocks.js',
    'tpc_flask/static/js/vendor/angular-animate/angular-animate.js',
    'tpc_flask/static/js/vendor/angular-aria/angular-aria.js',
    'tpc_flask/static/js/vendor/angular-material/angular-material.js',
    'tpc_flask/static/js/app.js',
    'tpc_flask/static/js/controllers.js',
    'tpc_flask/static/js/services.js',
    'tpc_flask/static/js/directives.js',
    'tpc_flask/static/js/tests/*.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['spec'],

    junitReporter : {
      outputFile: 'test-results.xml'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};

