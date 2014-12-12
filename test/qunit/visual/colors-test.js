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

  test('gold buttons should be #FFB310', function () {
    var bg_color = $($('.btn-gold')[0]).css('background-color')

    equal( bg_color, "rgb(255, 179, 16)" , "primary buttons are #990033")
  })

  test('blue buttons should be #008ED6', function () {
    var bg_color = $($('.btn-blue')[0]).css('background-color')

    equal( bg_color, "rgb(0, 142, 214)" , "primary buttons are #008ED6")
  })

  test('success buttons should be #568E14', function () {
    var bg_color = $($('.btn-success')[0]).css('background-color')

    equal( bg_color, "rgb(86, 142, 20)" , "primary buttons are #568E14")
  })

  test('success labels should be #568E14', function () {
    var color = $($('.form-group.has-success label')[0]).css('color')

    equal( color, "rgb(86, 142, 20)" , "success labels are #568E14")
  })

  test('danger buttons should be #F47C00', function () {
    var bg_color = $($('.btn-danger')[0]).css('background-color')

    equal( bg_color, "rgb(244, 124, 0)" , "primary buttons are #F47C00")
  })

  test('error labels should be #F47C00', function () {
    var color = $($('.form-group.has-error label')[0]).css('color')

    equal( color, "rgb(244, 124, 0)" , "error labels are #F47C00")
  })
})