/* Global js goes here */

(function ($) {


  $(document).bind("mobileinit", function(){

    // Disable ajax page handling on admin paths.
    if (window.location.pathname.substring(0, 6) == '/admin') {
      $.mobile.ajaxEnabled = false
      $.mobile.pushStateEnabled = false;
    }

    // Convert the hash-based Ajax URL into the full document path.
    // Recommended if Ajax is disabled or if external links are used extensively.
    //$.mobile.pushStateEnabled = false;

    // Default page transition. Can be 'none', 'fade', 'slide', 'pop'.
    $.mobile.defaultPageTransition = 'fade';

  });

  // Add effect to display dialogs on top of dimmed-out source page.
  // @see tqclarkson.com/2012/04/19/transparent-jquery-mobile-dialogs/
  $(document).on('pagebeforeshow', 'div[data-dialog="true"]', function(e, ui) {
    ui.prevPage.addClass("ui-dialog-background");
  });
  $(document).on('pagehide', 'div[data-dialog="true"]', function(e, ui) {
    $(".ui-dialog-background ").removeClass("ui-dialog-background");
  });


})(jQuery);