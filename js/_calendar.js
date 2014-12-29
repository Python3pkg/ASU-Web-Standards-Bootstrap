/* ========================================================================
 * Web Standards: calendar.js v0.0.2
 * ========================================================================
 * Copyright 2014 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Bootstrap-Addon/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  if ( typeof moment == 'undefined' ) throw new Error( 'Moment is required!' )

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
      var timeZone    = $(this).find('time').attr('data-timezone') || 'Z'
      var dateEnd     = $(this).attr('data-date-end') || ''
      var eventName   = $(this).attr('title') || ''
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
    if ( typeof data.dateStart == 'string' ) {
      var temp = new Date( data.dateStart )
      data.dateStart =  temp.format( 'Ymd\THis' )
    }

    if ( typeof data.dateEnd == 'string' ) {
      var temp = new Date( data.dateEnd )
      data.dateEnd =  temp.format( 'Ymd\THis' )
    }
  
    var icsMessage = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//'
    icsMessage += 'ASU'
    icsMessage += '//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:'
    icsMessage += CalendarPopover.UID()
    icsMessage += '\nDTSTAMP:'
    icsMessage += Date.now() + data.timeZone
    icsMessage += '\nATTENDEE;CN='
    icsMessage += data.message + ' '
    icsMessage += ';RSVP=TRUE:MAILTO:'
    icsMessage += data.mailto
    icsMessage += '\nORGANIZER;CN=Me:MAILTO::'
    icsMessage += data.mailto
    icsMessage += '\nDTSTART:'
    icsMessage += data.dateStart
    icsMessage += '\nDTEND:'
    icsMessage += data.dateEnd
    icsMessage += '\nLOCATION:'
    icsMessage += data.location
    icsMessage += '\nSUMMARY:'
    icsMessage += data.summary
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
