$(function () {
  'use strict';

  module('calendar plugin')

  test('should be defined on jquery object', function () {
    ok($(document.body).calendarPopover, 'popover method is defined')
  })

  module('calendar', {
    setup: function () {
      // Run all tests in noConflict mode -- it's the only way to ensure that the plugin works in noConflict mode
      $.fn.wsCalendarPopover = $.fn.calendarPopover.noConflict()
    },
    teardown: function () {
      $.fn.calendarPopover = $.fn.wsCalendarPopover
      delete $.fn.wsCalendarPopover
    }
  })

  test('should provide no conflict', function () {
    strictEqual($.fn.calendarPopover, undefined, 'popover was set back to undefined (org value)')
  });

  test('should return jquery collection containing the element', function () {
    var $el = $('<div/>')
    var $popover = $el.wsCalendarPopover()
    ok($popover instanceof $, 'returns jquery collection')
    strictEqual($popover[0], $el[0], 'collection contains element')
  })

  test('should render popover element', function () {
    // Need to set animation false! Otherwise, this test will fail!
    var $popover = $('<a href="#" title="idmontie" data-content="https://twitter.com/idmontie">@idmontie</a>')
      .appendTo('#qunit-fixture')
      .wsCalendarPopover({ animation: false })
      .wsCalendarPopover('show')

    notEqual($('.popover').length, 0, 'popover was inserted')
    $popover.wsCalendarPopover('hide')
    equal($('.popover').length, 0, 'popover removed')
  })

  test('should store popover instance in popover data object', function () {
    var $popover = $('<a href="#" title="idmontie" data-content="https://twitter.com/idmontie">@idmontie</a>').wsCalendarPopover()

    ok( $popover.data('bs.calendarPopover'), 'calendar popover isntance exists' )
  })

  // TODO tests for ICS data
})