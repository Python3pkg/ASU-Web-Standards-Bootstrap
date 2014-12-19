/* ========================================================================
 * Web Standards: calendar.js v0.0.2
 * ========================================================================
 * Copyright 2014 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Bootstrap-Addon/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var CalendarPopover = function (element, options) {
    this.options = $.extend({}, CalendarPopover.DEFAULTS, options)
    this.init('calendarPopover', element, this.options)
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
      var dateStart   = $(this).find('time').attr('datetime') || ''
      var dateEnd     = $(this).find('time').attr('datetime') || ''
      var eventName   = $(this).attr('title') || ''
      var timeZone    = $(this).find('time').attr('data-timezone') || 'Z'
      var filename    = $(this).attr('data-filename') || 'invite.ics'
      var subject     = $(this).attr('data-subject') || ''
      var description = $(this).attr('data-description') || ''
      var location    = $(this).attr('data-location') || ''
      var mailto      = $(this).attr('data-mailto') || 'me@email.com'

      // TODO test
      var ics = CalendarPopover.ICS( {
        timeZone : timeZone,
        message : description,
        mailto : mailto,
        dateStart : dateStart,
        dateEnd : dateEnd,
        location : location,
        summary : eventName + ( subject === '' ? '' : ' : ' + subject )
      } )

      return '<a download="' + filename + '" href="' + 'data:text/plain;charset=utf-8,' + encodeURIComponent(ics) + '">Add this event to your calendar<\/a>';
    }
  })

  CalendarPopover.ICS = function ( data ) {
    var dateStamp = Date.now()
    var uid       = CalendarPopover.UID()
    var company   = 'ASU'

    var timeZone  = data.timeZone
    var message   = data.message
    var mailto    = data.mailto
    var dateStart = data.dateStart
    var dateEnd   = data.dateEnd
    var location  = data.location
    var summary   = data.summary

    var icsMessage = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//'
    icsMessage += company
    icsMessage += '//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:'
    icsMessage += uid
    icsMessage += '\nDTSTAMP:'
    icsMessage += dateStamp + timeZone
    icsMessage += '\nATTENDEE;CN='
    icsMessage += message + ' '
    icsMessage += ';RSVP=TRUE:MAILTO:'
    icsMessage += mailto
    icsMessage += '\nORGANIZER;CN=Me:MAILTO::'
    icsMessage += mailto
    icsMessage += '\nDTSTART:'
    icsMessage += dateStart
    icsMessage += '\nDTEND:'
    icsMessage += dateEnd
    icsMessage += '\nLOCATION:'
    icsMessage += location
    icsMessage += '\nSUMMARY:'
    icsMessage += summary
    icsMessage += '\nEND:VEVENT\nEND:VCALENDAR';

    return icsMessage
  }

  CalendarPopover.UID = function () {
    // Quick, short uid
    return ('0000' + (Math.random() * Math.pow(36,4) << 0).toString(36)).slice(-4)
  }

  // NOTE: POPOVER EXTENDS popover.js
  // ================================

  CalendarPopover.prototype = $.extend({}, $.fn.popover.Constructor.prototype)

  CalendarPopover.prototype.constructor = CalendarPopover

  CalendarPopover.prototype.getDefault = function () {
    return CalendarPopover.DEFAULTS
  }

  // CALENDAR POPOVER PLUGIN DEFINITION
  // ==================================

  function Plugin(option) {
    return this.each(function () {
      var $this    = $(this)
      var data     = $this.data('bs.calendarPopover')
      var options  = typeof option == 'object' && option

      if (! data && option == 'destroy')
        return
      else {
        if (! option)
          option = CalendarPopover.prototype.getDefault()

        if (! data)
          $this.data('bs.calendarPopover', (data = new CalendarPopover(this, options)))
      }

      if (typeof option == 'string')
        data[option]()
    })
  }

  var old = $.fn.calendarPopover

  $.fn.calendarPopover             = Plugin
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
