/* ========================================================================
 * Web Standards: sidebar.js v0.0.1
 * ========================================================================
 * Copyright 2014 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Bootstrap-Addon/blob/master/LICENSE)
 * ======================================================================== */

 +function ($) {
  'use strict';

  $(document).ready(function () {
    var affixed = $('#sidebarNav').each(function ( ) {
      var $this = $(this);

      $this.affix( {
        offset: {
          top : $this.offset().top,
          bottom : function () {
            var fix = parseInt($this.css('margin-bottom'), 10)
            fix += parseInt($this.css('padding-top'), 10)
            fix += parseInt($this.css('padding-bottom'), 10)
            return  $('.footer').outerHeight(true) + fix
          }
        }
      } )

      // Hacky fix for responsive width
      var responsiveFix = function () {
        $this.width( $this.parent().width() )
      }

      $(window).smartresize( responsiveFix )

      responsiveFix()
    })

    /*
     * Fix the pushed column affix bug in safari. Applies to the 
     * sticky sidebar.
     *
     * @sourcehttps://github.com/twbs/bootstrap/issues/12126
     */
     if ( navigator.userAgent.indexOf('Safari') != -1 &&
          navigator.userAgent.indexOf('Chrome') == -1 ) {

        var explicitlySetAffixPosition = function () {
          if ( $(window).innerWidth() >= 992 ) {
            affixed.css('left', affixed.offset().left + 'px')
          }
        }

        /*
         * Before the element becomes affixed, add left CSS that is equal
         * to the distance of the element from the left of the screen
         */
        affixed.on('affix.bs.affix', function () {
          explicitlySetAffixPosition()
        })

        /*
         * Remove left position when affix-top class is applied
         */
        affixed.on('affix-top.bs.affix', function () {
          affixed.css('left', 'auto')
        })

        /**
         * On resize, un-affix the affixed widget to measure where it
         * should be located, then set the left CSS accordingly, re-affix
         * it
         */
        $(window).smartresize(function () {
          if ( affixed.hasClass('affix') ) {
            affixed.removeClass('affix')
            affixed.css('left','auto')
            explicitlySetAffixPosition()
            affixed.addClass('affix')
          }
        })

        /**
         * Now we have to remove the left positioning of get affix-bottom
         * to work properly
         */
        affixed.on('affix-bottom.bs.affix', function() {
          affixed.css('left','auto')
        })
     }
  })

 } (jQuery);