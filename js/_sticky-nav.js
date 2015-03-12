/* ========================================================================
 * Web Standards: sticky-nav.js v0.0.1
 * ========================================================================
 * Copyright 2014 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Bootstrap-Addon/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // TODO refactor this constant
  var mobileWidth = 992

  $(function () {
    $('.navbar.navbar-ws').affix({
      offset: {
        top: $('#asu_header').outerHeight()
      }
    }).each(function (i, e) {
      $(e).on('affix.bs.affix', function () {
        // Add the height of the navbar to the margin of the body
        if ( $( window ).width() >= mobileWidth ) {
          $('body').css('margin-top', $(e).outerHeight() + 'px');
        }
      }).on('affixed-top.bs.affix', function () {
        // Remove the height of the navbar to the margin of the body
        $('body').css('margin-top', '0px');
      })
    })
  })
} (jQuery);
