/* ========================================================================
 * Web Standards: smoothscroll.js v0.0.1
 * ========================================================================
 * Copyright 2014 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Bootstrap-Addon/blob/master/LICENSE)
 * ======================================================================== */

+function () {
  'use strict';

  if ( typeof smoothScroll !== 'undefined' ) {
    smoothScroll.init()
  } else {
    throw new Error( 'SmoothScroll is required!' )
  }

} ();
