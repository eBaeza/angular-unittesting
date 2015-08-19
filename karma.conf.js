// Karma Configuration 
module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'app/core/angular.min.js',
      'app/core/angular-mocks.js',
      'app/app.js',
      'app/controllers/*.js',
      'test/*.spec.js',
    ]
  });
};