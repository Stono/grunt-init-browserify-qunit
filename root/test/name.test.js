'use strict';
require('qunit');
var $ = require('jquery');

test('Home', function() {
    $('.nav a[href="/"]').click();
    equal(1, $('#home').length, 'Should see the home page');
});

test('About', function() {
    $('.nav a[href="/about"]').click();
    equal(1, $('#about').length, 'Should see the about page');
});

