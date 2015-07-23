$(function () {
  'use strict';

  module('home icon test', {
    beforeEach : function () {
      var homeIconLi     = $('.navbar-ws ul.nav li:first').addClass( 'notransition' );
      var a              = homeIconLi.find('a').addClass( 'notransition' );
      var icon           = homeIconLi.find('span.fa').addClass( 'notransition' );
    }
  })

  // Icon Font Properties
  // ====================
  
  test('home icon normal state', function () {
    var homeIconLi     = $('.navbar-ws ul.nav li:first');
    var a              = homeIconLi.find('a');
    var icon           = homeIconLi.find('span.fa');

    var computedStyles = getComputedStyle(icon[0]);

    equal( computedStyles['font-family'], 'FontAwesome', 'The icon uses font awesome' )
    equal( computedStyles['font-size'], '15px', 'The icon should be 15px' )
    equal( computedStyles['color'], 'rgb(237, 237, 237)', 'The icon should be #ededed' )
    equal( computedStyles['font-style'], 'normal', 'The icon should be normal' )
    equal( computedStyles['font-weight'], 'normal', 'The icon should be normal' )
    equal( computedStyles['line-height'], '15px', 'The icon should be line height = 1' )
  })

  test('home icon active state', function () {
    var homeIconLi     = $('.navbar-ws ul.nav li:eq(1)');
    var icon           = homeIconLi.find('span.fa');
    var computedStyles = getComputedStyle(icon[0]);

    equal( computedStyles['font-family'], 'FontAwesome', 'The icon uses font awesome' )
    equal( computedStyles['font-size'], '15px', 'The icon should be 15px' )
    equal( computedStyles['color'], 'rgb(255, 255, 255)', 'The icon should be white' )
    equal( computedStyles['font-style'], 'normal', 'The icon should be normal' )
    equal( computedStyles['font-weight'], 'normal', 'The icon should be normal' )
    equal( computedStyles['line-height'], '15px', 'The icon should be line height = 1' )
  })

  test('home icon hover state', function () {
    var homeIconLi     = $('.navbar-ws ul.nav li:eq(2)');
    var icon           = homeIconLi.find('span.fa');
    var computedStyles = getComputedStyle(icon[0]);

    equal( computedStyles['font-family'], 'FontAwesome', 'The icon uses font awesome' )
    equal( computedStyles['font-size'], '15px', 'The icon should be 15px' )
    equal( computedStyles['color'], 'rgb(255, 179, 16)', 'The icon should be #ffb310' )
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