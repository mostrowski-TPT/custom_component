module.exports = function(config) {
    config.set({
    // The root path location that will be used to resolve all relative paths
    // defined in files and exclude
    basePath: '',
    // List of files or patterns to load in the browser
    files: [
        { pattern: 'tests/libraries/jquery-min.js', included: true, watched: false },
        { pattern: 'tests/libraries/underscore-min.js', included: true, watched: false },
        { pattern: 'tests/libraries/*.js', included: false, watched: false },
        { pattern: 'js/*.js', included: false },
        { pattern: 'tests/spec/*.spec.js', included: false },
        'tests/test-main.js'
    ],
    // List of frameworks you want to use: jasmine, mocha, qunit
    frameworks: ['expect', 'mocha', 'requirejs'],
    // Enable or disable watching files and executing the tests
    // whenever one of these files changes.
    autoWatch: true,
    // Chrome (comes installed with Karma)
    // ChromeCanary (comes installed with Karma)
    // PhantomJS (comes installed with Karma)
    // Firefox (requires karma-firefox-launcher plugin)
    // Opera (requires karma-opera-launcher plugin)
    // Internet Explorer (requires karma-ie-launcher plugin)
    // Safari (requires karma-safari-launcher plugin)
    browsers: ['Chrome', 'PhantomJS', 'Firefox'],
    // If singleRun is set to true, Karma will start and capture all
    // configured browsers, run tests and then exit with an exit code of 0 or 1.
    singleRun: false
    });
};