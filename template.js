/*
 * grunt-init-browserify-qunit
 *
 * Copyright (c) 2014 Karl Stoney
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a browserify application with grunt-init, using QUnit for Test Driven UI development';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ shouldn\'t contain "node" or "js" and should ' +
  'be a unique ID not already in use at search.npmjs.org.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'node'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('node_version', '>= 0.8.0'),
    init.prompt('main'),
    init.prompt('npm_start', 'grunt build && node server.js'),
  ], function(err, props) {
    props.keywords = [];
    props.devDependencies = {
      "brfs": "^1.1.1",
      "browserify": "^4.1.9",
      "browserify-shim": "^3.5.0",
      "domready": "^1.0.5",
      "grunt": "~0.4.5",
      "grunt-contrib-jshint": "~0.10.0",
      "grunt-contrib-watch": "~0.6.1",
      "mustache": "^0.8.1",
      "uglify-js": "~2.4.13",
      "grunt-notify": "~0.3.0",
      "jshint": "~2.5.1",
      "grunt-contrib-cssmin": "~0.9.0",
      "grunt-contrib-uglify": "~0.4.0",
      "grunt-browserify": "~2.1.0",
      "express": "~4.4.2",
      "morgan": "~1.1.1",
      "location-bar": "^2.0.0",
      "moment": "^2.6.0",
      "node-guid": "0.0.3",
      "superagent": "~0.18.0"
    };
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props, function(props) {
      props["browserify-shim"] = "./shim.js";
      props.browser = {
        "bootstrap": "./static/js/bootstrap.js",
        "bootstrapSelect": "./static/js/bootstrap-select.js",
        "jquery": "./static/js/jquery.js",
        "qunit": "./static/js/qunit.js"
      };
      props.browserify = {
        transform: [
          "browserify-shim"
        ]
      };

      return props;
    });

    // All done!
    done();
  });

};
