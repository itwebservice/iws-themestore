$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height);
  $(".fitscreen").css("height", fitscreen);

  // ------- Datepicker  js --------//

  $(function () {
    $(".date-picker").datepicker();
  });

  //------- Niceselect  js --------//

  if (document.getElementById("default-select")) {
    $("select").niceSelect();
  }
  if (document.getElementById("default-select2")) {
    $("select").niceSelect();
  }
  if (document.getElementById("service-select")) {
    $("select").niceSelect();
  }

  $(document).ready(function () {
    $("html, body").hide();

    if (window.location.hash) {
      setTimeout(function () {
        $("html, body").scrollTop(0).show();

        $("html, body").animate(
          {
            scrollTop: $(window.location.hash).offset().top - 108,
          },
          1000
        );
      }, 0);
    } else {
      $("html, body").show();
    }
  });

  jQuery(document).ready(function ($) {
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if (path == "") {
      path = "index.html";
    }

    var target = $('nav a[href="' + path + '"]');
    // Add active class to target link
    target.addClass("menu-active");
  });

  $(document).ready(function () {
    if ($(".menu-has-children ul>li a").hasClass("menu-active")) {
      $(".menu-active")
        .closest("ul")
        .parentsUntil("a")
        .addClass("parent-active");
    }
  });

  //------- Header Scroll Class  js --------//

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });
});
