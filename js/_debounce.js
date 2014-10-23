/* ========================================================================
 * Web Standards: debounce.js v0.0.1
 * ========================================================================
 * Copyright 2014 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Bootstrap-Addon/blob/master/LICENSE)
 * ======================================================================== */

/*
 * Throttle the window resize event for performance and smoothness.
 */
+function ( $, sr ) {
  'use strict';
  /**
   * Debounce function
   * @author John Hann
   * @source http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
   */
  var debounce = function ( func, threshold, execAsap ) {
    var timeout
    return function () {
      var obj = this
      var args = arguments

      function delayed () {
        if ( ! execAsap ) {
          func.apply ( obj, args )
        }

        timeout = null
      }

      if ( timeout )
        clearTimeout( timeout )
      else if ( execAsap )
        func.apply( obj, args )

      timeout = setTimeout( delayed, threshold || 500 )
    }
  }

  /**
   * Smart Resize Function
   * @author Paul Irish
   * @source http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
   */
  jQuery.fn[sr] = function (fn) {
    return fn ? this.bind( 'resize', debounce( fn ) ) : this.trigger( sr )
  }

} (jQuery, 'smartresize')
