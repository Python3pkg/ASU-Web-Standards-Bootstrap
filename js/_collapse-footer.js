+function ($) {
  'use strict';

  // TODO refactor this constant
  var mobileWidth = 768

  function collapseFooter () {
    // Adjust footer classes so they are only collapsed on mobile
    if ( $(window).innerWidth() >= mobileWidth ) {
      // Add collapse open class
      $('.big-foot-nav').not('.in').addClass('in')
    } else {
      // Remove collapse open class
      $('.big-foot-nav').removeClass('in')
      // Arpit Changes
      $('.big-foot h2 span').removeClass('footer-caret-down')
    }
  }

  $('.big-foot h2[data-toggle="collapse"]').click(function (e) {
    if ( $(window).innerWidth() >= mobileWidth ) {
      // Don't collapse!
      e.preventDefault();
      var id = $(this).attr('data-target');
      $(id).addClass('in');
      return false;
    } else {
      var id1 = $(this).attr('data-target');
      if ( $('.big-foot-nav').hasClass('in') ) {
         // Arpit caret down remove on click
        $('.big-foot h2[data-target="' + id1 + '"] span').removeClass('footer-caret-down')
        // Arpit Changes for caret left
        $('.big-foot h2[data-target="' + id1 + '"]  span').addClass('footer-caret')
      } else {
        // Arpit caret left remove on click
        $('.big-foot h2[data-target="' + id1 + '"] span').removeClass('footer-caret')
        // Arpit Changes for caret down
        $('.big-foot h2[data-target="' + id1 + '"]  span').addClass('footer-caret-down')
      }
    }
  });


  $(document).ready(function () {
    // Keep all window resize scripts within the throttling function
    $(window).smartresize( collapseFooter )

    // Run collapse footer right off the bat
    collapseFooter()
  });
} (jQuery);
