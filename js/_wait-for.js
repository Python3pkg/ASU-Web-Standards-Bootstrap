/* ========================================================================
 * Web Standards: wait-for.js v0.0.1
 * ========================================================================
 * Copyright 2014 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Bootstrap-Addon/blob/master/LICENSE)
 * ======================================================================== */

/*
 * Wait For Documentation
 *
 * Allows you to wait for when a given element is
 * a given selector and run a callback.  The callback
 * is only run once.  If the condition is true, then
 * the callback will be run immediately; i.e. it does
 * not wait for the condition to be false and then wait
 * for the condition to be true.
 *
 * Definition:
 *
 * $( selector ).waitFor( selector, callback [, options] )
 *
 * Options:
 *
 * ```js
 * {
 *   "rate" : Number [200]
 * }
 * ```
 *
 * Example:
 *
 * Run a function when $('body') has the class 'done'
 *
 * ```js
 * $( 'body' ).waitFor( '.done', function () {
 *   console.log( 'body is done!' )
 * } );
 * ```
 *
 * Example 2:
 *
 * Run a function when $('body') does not have the class 'done'.
 * This will run immediately once run
 *
 * ```js
 * $( 'body' ).waitFor( ':not(.done)', function () {
 *   console.log( 'body is not done!' )
 * } );
 * ```
 */

+function ($) {
  'use strict';

  // WAITFOR PUBLIC CLASS DEFINITION
  // ===============================

  var WaitFor = function (element, options) {
    this.options = $.extend({}, options)
  }

  WaitFor.VERSION = '0.0.1'

  WaitFor.DEFAULTS = {
    rate : 100
  }

  WaitFor.prototype = {}

  WaitFor.prototype.constructor = WaitFor

  // WAITFOR PLUGIN DEFINITION
  // =========================

  function Plugin( selector, callback, option ) {
    var $self   = $( this )
    var options = typeof option == 'object' && option

    options = $.extend( WaitFor.DEFAULTS, options )

    var interval = setInterval( function () {
      if ( $self.is( selector ) ) {
        clearInterval( interval )

        callback.call( $self )
      }
    }, options.rate )
  }

  var old = $.fn.WaitFor

  $.fn.waitFor             = Plugin
  $.fn.waitFor.Constructor = WaitFor

  // WAITFOR NO CONFLICT
  // ===================

  $.fn.waitFor.noConflict = function () {
    $.fn.waitFor = old
    return this
  }

} (jQuery);
