$(function () {
  'use strict';

  module('check that setup navigation is defined');

  test('setupNavigation should exist', function () {
    ok($.setupNavigation, 'navigation should exist');
  })

  module('nav click and hover', {
    setup: function () {
      // Create a menu
      

      // Run the setup
      $.setupNavigation();
    },
    teardown: function () {
      // Remove menu
    }
  });

  // TODO tests for nav click and hover
  
  // Test that clicking will add the open class
  // and clicking again removes the open class
  test('clicking should open and close the nav', function () {
    ok(true);  
  })
  
  // Test that hovering will add the open class
  // and hover out will remove the open class
});
