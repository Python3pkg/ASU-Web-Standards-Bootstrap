/* ========================================================================
 * Web Standards: calendar.js v0.0.1
 * ========================================================================
 * Copyright 2014 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Bootstrap-Addon/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  $.fn.calendarPopover = function () {
    function generateICS ( data ) {
      // TODO issue #9
      return '' + data
    }

    this.popover( {
      animation: true,
      html: true,
      placement: 'bottom',
      trigger: 'click',
      content: function () {
        // Grab the datetime from the content
        var dateTime = $(this).find('time').attr('datetime') || ''
        var eventName = $(this).attr('title') || ''
        var timeZone = $(this).find('time').attr('data-timezone') || ''
        var filename = $(this).attr('data-filename') || 'invite.ics'

        var ics = generateICS( {
          dateTime : dateTime,
          eventName : eventName,
          timeZone : timeZone
        } )

        return '<a download="' + filename + '" href="' + 'data:text/plain;charset=utf-8,' + encodeURIComponent(ics) + '">Add this event to your calendar<\/a>';
      }
    } )
  }

  $('.calendarPopover').calendarPopover();
} (jQuery);
