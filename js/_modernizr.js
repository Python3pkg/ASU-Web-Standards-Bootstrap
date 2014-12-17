/* ========================================================================
 * Web Standards: modernizr.js v0.0.1
 * ========================================================================
 * Copyright 2014 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Bootstrap-Addon/blob/master/LICENSE)
 * ======================================================================== */

+function () {
  'use strict';

  if ( typeof Modernizr == 'undefined' ) throw new Error( 'Modernizr is required!' )

  Modernizr.load( {
    text: Modernizr.touch,
    yep : '/js/lightningtouch.js'
  } )

} ();
