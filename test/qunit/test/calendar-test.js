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

  // TODO
})