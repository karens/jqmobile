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

})(jQuery);