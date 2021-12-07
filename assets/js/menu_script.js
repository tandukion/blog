
(function($) {
  "use strict"; // Start of use strict

  $('#menu-button').click(function() {
    let newPos = 0;
    if ($('.site-nav').is(":hidden")) {
      // Show site-nav
      $('.site-nav').show();

      // Change menu-button position
      newPos = (parseInt($(this).css('right')) + $('.site-nav').width()).toString() + 'px';
      $(this).css({ right: newPos });

      // Switch button text
      ($(this).find('.fa-bars')).hide();
      ($(this).find('.fa-angle-right')).show();
    }
    else {
      // Change menu-button position
      newPos = (parseInt($(this).css('right')) - $('.site-nav').width()).toString() + 'px';
      $(this).css({ right: newPos });

      // Hide site-nav
      $('.site-nav').hide();

      // Switch button text
      ($(this).find('.fa-bars')).show();
      ($(this).find('.fa-angle-right')).hide();
    }
  });
})(jQuery);
  