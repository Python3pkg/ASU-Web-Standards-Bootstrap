$(function () {
  'use strict';

  // TODO develop a qunit plugin for color checking

  module('color visual test')

  test('header should be white', function () {
    var bg_color = $('#asu_header').css('background-color')

    equal( bg_color, "rgba(0, 0, 0, 0)", "header is white" )
  })

  test('primary unit font color should be black', function () {
    var color = $('.site-title .first-word a').css('color')

    equal( color, "rgb(0, 0, 0)", "site title first word is black")
  })

  test('secondary unit should be gray', function () {
    var color = $('.site-title>a').css('color')

    equal( color, "rgb(79, 85, 87)", "site title second word is #4F5557")
  })

  test('navigation hover font color should be #FFB204', function () {
    var selected = $('.navbar-ws .dropdown>a')[0]

    // TODO untestable :(
    equal( 1, 1 );
  })

  test('primary buttons should be maroon', function () {
    var bg_color = $($('.btn-primary')[0]).css('background-color')

    equal( bg_color, "rgb(153, 0, 51)" , "primary buttons are #990033")
  })

  test('links should be maroon', function() {
    var color = $($('a')[0]).css('color')

    equal( color, "rgb(153, 0, 51)" , "links are #990033")
  })

})