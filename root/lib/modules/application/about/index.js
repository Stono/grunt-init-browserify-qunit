'use strict';
var $ = require('jquery');
var mustache = require('mustache');
var fs = require('fs');
var template = fs.readFileSync(__dirname + '/view.html', 'utf8');
var AboutViewModel = require('./aboutViewModel');

module.exports = function(element, options) {
  var aboutViewModel = new AboutViewModel(options);

  function render() {
    console.log('Rendering About');
    $(element).html(mustache.render(template, aboutViewModel));
    $('select').selectpicker();
  }

  function unload() {
    console.log('Unloading About');
  }

  return Object.freeze({
    render: render,
    unload: unload
  });
};
