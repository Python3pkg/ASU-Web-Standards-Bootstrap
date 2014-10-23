/* ========================================================================
 * Web Standards: calendar.js v0.0.1
 * ========================================================================
 * Copyright 2014 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Bootstrap-Addon/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  $('.calendarPopover').popover( {
    animation: true,
    html: true,
    placement: 'bottom',
    trigger: 'click',
    content: function () {
      // TODO
      return '<a href="#">Add this event to your calendar<\/a>';
    }
  } )
} (jQuery);
