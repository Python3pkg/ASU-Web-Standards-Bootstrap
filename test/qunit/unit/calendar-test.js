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

  test('should destroy', function () {
    var $el = $('<div/>')
    var $popover = $el.wsCalendarPopover()

    var data = $popover.data('bs.calendarPopover')

    ok(data, 'popover has data')

    $popover.wsCalendarPopover('destroy')

    data = $popover.data('bs.calendarPopover')

    ok(data === undefined, 'popover does not have data')
  })

  test('should do nothing when calling destroy on unsetup element', function () {
    var $el = $('<div/>')
    var $popover = $el.wsCalendarPopover('destroy')

    var data = $popover.data('bs.calendarPopover')

    ok(data === undefined, 'popover does not have data')
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

  test('should show download link', function () {
    var fixture = '<div class="calendar-date calendarPopover" data-original-title="" title="">'
    fixture    += '<time datetime="2014-01-01">'
    fixture    += '<span class="weekday">Sun</span>'
    fixture    += '<span class="date">1</span>'
    fixture    += '<span class="month">Jan</span>'
    fixture    += '</time>'
    fixture    += '</div>'

    var $fixture = $(fixture)
    $fixture.appendTo('body')

    var $popover = $fixture.wsCalendarPopover({
      animation: false
    })

    $popover.click()
    
    var $pop = $('.popover.bottom')

    ok( $pop.is('.in') && $pop.is(':visible'), 'The popup is displayed' )

    // Clean up
    $popover.click()
    $popover.remove()
  })


  // TODO test validity of calendar data
})