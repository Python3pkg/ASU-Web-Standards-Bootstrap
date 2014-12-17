$(function () {
  'use strict';

  module('smartresize plugin')

  test('should be defined on jquery object', function () {
    ok($(document.body).smartresize, 'smartresize method is defined')
  })

  module('smartresize', {
    setup: function () {
      // Run all tests in noConflict mode -- it's the only way to ensure that the plugin works in noConflict mode
      $.fn.wsSmartresize = $.fn.smartresize.noConflict()
    },
    teardown: function () {
      $.fn.smartresize = $.fn.wsSmartresize
      delete $.fn.wsSmartresize
    }
  })

  test('should provide no conflict', function () {
    strictEqual($.fn.smartresize, undefined, 'popover was set back to undefined (org value)')
  });

  test('should return jquery collection containing the element', function () {
    var $el = $('<div/>')
    var $smartresize = $el.wsSmartresize()
    ok($smartresize instanceof $, 'returns jquery collection')
    strictEqual($smartresize[0], $el[0], 'collection contains element')
  })

  // TODO test unbind

  var callback = function () {
    // TODO
  }

  module('smartresize attached to window', {
    setup: function () {
      $(window).smartresize( callback )
    },
    teardown: function () {
      $(window).smartresize( 'unbind', callback )
    }
  })

  /*test('should run once when resize is called', function () {
    // TODO
  })

  test('should run once when resize is called many times', function () {
    // TODO
  })*/

  // TODO test different thresholds
  // TODO test execAsap
})