$(function () {
  'use strict';

  module('collapsed footer')

  // phantomjs is always started with mobile width
  test('footer dropdowns should be collapsed for mobile', function () {
    var $nav = $( $( '.big-foot-nav.collapse' )[0] )
    var $remaining = $nav.not( '.in' )

    equal( $remaining.length > 0, true, 'footer dropdowns are collapsed' )
  })

  test('footer dropdowns show on click', function () {
    var $nav = $( $( '.big-foot-nav.collapse' )[0] )
    $nav.parent().find('h2').click()

    stop()

    setTimeout( function () {
      var $remaining = $nav.not( '.in' )
      equal( $remaining.length == 0, true, 'footer dropdown is not collapsed' )

      start()
    }, 500 )
  })

  test('footer dropdowns hide on click', function () {
    var $nav = $( $( '.big-foot-nav.collapse' )[0] )
    $nav.parent().find('h2').click()

    stop()

    setTimeout( function () {
      var is = $nav.is( '.in' )
      equal( is, false, 'footer dropdown is collapsed' )

      start()
    }, 500 )
  })
})