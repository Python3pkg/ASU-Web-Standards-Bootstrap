$(function () {
  'use strict';

  module('calendar')

  test('should be defined on jquery object', function () {
    ok($(document.body).calendarPopover, 'popover method is defined')
  })
})