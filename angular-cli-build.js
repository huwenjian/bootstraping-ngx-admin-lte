/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

//contenu necessaire dans node_modules
module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js',
      //ng2-bootstrap specific
      //'@angular/core/src/facade/lang.js',
      'moment/**/*.js',
      'ng2-bootstrap/**/*.js'
    ]
  });
};