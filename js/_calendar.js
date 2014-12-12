/* ========================================================================
 * Web Standards: calendar.js v0.0.1
 * ========================================================================
 * Copyright 2014 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Bootstrap-Addon/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var CalendarPopover = function (element, options) {
    this.init('popover', element, options)
  }

  if (! $.fn.popover) throw new Error('Calendar Popover requires popover')

  CalendarPopover.VERSION = '0.0.1'

  CalendarPopover.DEFAULTS = $.extend({}, $.fn.popover.Constructor.DEFAULTS, {
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

      // TODO test
      var ics = this.generateICS( {
        dateTime : dateTime,
        eventName : eventName,
        timeZone : timeZone
      } )

      return '<a download="' + filename + '" href="' + 'data:text/plain;charset=utf-8,' + encodeURIComponent(ics) + '">Add this event to your calendar<\/a>';
    }
  })

  // NOTE: POPOVER EXTENDS popover.js
  // ================================

  CalendarPopover.prototype = $.extend({}, $.fn.popover.Constructor.prototype)

  CalendarPopover.prototype.constructor = CalendarPopover

  CalendarPopover.prototype.getDefault = function () {
    return CalendarPopover.DEFAULTS
  }

  CalendarPopover.prototype.generateICS = function ( data ) {
    // TODO issue #9
    return '' + data
  }


  // CALENDAR POPOVER PLUGIN DEFINITION
  // ==================================

  function Plugin(option) {
    return this.each(function () {
      var $this    = $(this)
      var data     = $this.data('bs.calendarPopover')
      var options  = typeof option == 'object' && option
      var selector = options && options.selector

      if (! data && option == 'destroy')
        return
      if (selector) {
        if (! data)
          $this.data('bs.calendarPopover', (data = {}))
        if (! data[selector])
          data[selector] = new CalendarPopover(this, options)
      } else {
        if (! data)
          $this.data('bs.calendarPopover', (data = new CalendarPopover(this, options)))
      }

      if (typeof option == 'string')
        data[option]()
    })
  }

  var old = $.fn.calendarPopover

  $.fn.calendarPopover            = Plugin
  $.fn.calendarPopover.Constructor = CalendarPopover

  // CALENDAR POPOVER NO CONFLICT
  // ============================

  $.fn.calendarPopover.noConflict = function () {
    $.fn.calendarPopover = old
    return this
  }

  /*
   * Run on page load (bootstrap it)
   */
  $(document).ready( function () {
    $('.calendarPopover').calendarPopover()
  } )
} (jQuery);
