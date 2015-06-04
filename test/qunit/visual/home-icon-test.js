$(function () {
  'use strict';

  module('home icon test')

  // Icon Font Properties
  // ====================
  
  test('home icon should have specific font properties', function () {
    var homeIconLi     = $('.navbar-ws ul.nav li:first');
    var icon           = homeIconLi.find('span.fa');
    var computedStyles = getComputedStyle(icon[0]);

    equal( computedStyles['font-family'], 'FontAwesome', 'The icon uses font awesome' )
    equal( computedStyles['font-size'], '15px', 'The icon should be 15px' )
    equal( computedStyles['color'], 'rgb(237, 237, 237)', 'The icon should be #ededed' )
    // TODO cannot test hover color is #ffb204
    equal( computedStyles['font-style'], 'normal', 'The icon should be normal' )
    equal( computedStyles['font-weight'], 'normal', 'The icon should be normal' )
    equal( computedStyles['line-height'], '15px', 'The icon should be line height = 1' )
  })

  test('home icon should have specific padding', function () {
    var homeIconLi     = $('.navbar-ws ul.nav li:first');
    var a              = homeIconLi.find('a');
    var computedStyles = getComputedStyle(a[0]);

    equal( computedStyles['padding-top'], '21px', 'The icon should have 21px top' )
    equal( computedStyles['padding-left'], '14px', 'The icon should have 14px left' )
  })
})