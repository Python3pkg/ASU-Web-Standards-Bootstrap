/* ========================================================================
 * Web Standards: modernizr.js v0.0.1
 * ========================================================================
 * Copyright 2014 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Bootstrap-Addon/blob/master/LICENSE)
 * ======================================================================== */

if ( typeof Modernizr !== 'undefined' ) {
  Modernizr.load( {
    text: Modernizr.touch,
    yep : '/js/lightningtouch.js'
  } )
} else {
  console.log('Modernizr is required!')
}