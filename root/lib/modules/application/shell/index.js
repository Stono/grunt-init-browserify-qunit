'use strict';
var mustache = require('mustache');
var fs = require('fs');
var template = fs.readFileSync(__dirname + '/view.html', 'utf8');
var navigation = require('../../../navigation');
var $ = require('jquery');

var Home = require('../home');
var About = require('../about');

var current;
module.exports = function(element, options) {

  var model = {
    title: 'Your Application'
  };

  navigation.route(/^$/, function() {
    switchTo(Home, options);
  });

  navigation.route(/^about/, function() {
    switchTo(About, options);
  });

  function render() {
    $(element).html(mustache.render(template, model));
    $('.nav a[href!="#"]', element).on('click', function(e) {
      var hrefToUpdate = $(e.target).attr('href');
      console.log(hrefToUpdate);
      navigation.update(hrefToUpdate, {
        trigger: true
      });
      e.preventDefault();
    });
    navigation.loadUrl();
  }

  function switchTo(Presenter, options) {
    console.log('switching');
    if(current) { current.unload() }
    current = new Presenter($('#shell-content'), options);
    current.render();
  }

  return Object.freeze({
    render: render
  });
};
