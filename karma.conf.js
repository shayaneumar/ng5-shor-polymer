// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    files: [
      { pattern: './node_modules/@mitel/shor-webcomponentsjs/webcomponents-lite.min.js', included: true, watched: false },
      { pattern: './node_modules/@mitel/shor-polymer/polymer.html', included: true, watched: false },
      { pattern: './node_modules/@mitel/shor-textarea/shor-textarea.html', included: true, watched: false },
      { pattern: './node_modules/@mitel/shor-textfield/shor-textfield.html', included: true, watched: false },
      { pattern: './node_modules/@mitel/shor-button/shor-button.html', included: true, watched: false },
      { pattern: './node_modules/@mitel/shor-toggle/shor-toggle.html', included: true, watched: false },
      { pattern: './node_modules/@mitel/shor-avatar/shor-avatar.html', included: true, watched: false },
      { pattern: './node_modules/@mitel/shor-toolbar/shor-toolbar.html', included: true, watched: false },
      { pattern: './node_modules/@mitel/shor-contextmenu/shor-contextmenu.html', included: true, watched: false },
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
