"use strict";
$(document).ready(function() {
  var a = function() {
      if ((device.tablet() || device.mobile()) && (window.navigator.userAgent.indexOf("Chrome") > 0 || window.navigator.userAgent.indexOf("CriOS") > 0)) return 1
    },
    b = function() {
      if (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0) return 1
    },
    e = function() {
      if (navigator.userAgent.match(/Trident\/7\./)) return 1
    },
    f = function() {
      if (navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) return 1
    },
    g = function() {
      if (window.navigator.userAgent.indexOf("MSIE 10.0") > 0) return 1
    },
    h = function() {
      if (window.navigator.userAgent.indexOf("MSIE 9.0") > 0) return 1
    },
    i = function() {
      if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Mac") != -1) return 1
    },
    j = function() {
      var a = $(window).height();
      $(".fullscreen").css("height", a)
    };
  j(), $(window).resize(function() {
    j()
  }), device.tablet() || device.mobile() || h() || $(".animation").css({
    visibility: "hidden"
  }), Pace.on("done", function() {
    $("#preloader").hide()
  }), Pace.on("hide", function() {
    var a = $("#masonry-gallery");
    if (device.tablet() || device.mobile() ? a.masonry({
        columnWidth: ".grid-sizer",
        itemSelector: ".masonry-col",
        gutter: ".gutter-sizer",
        transitionDuration: 0
      }) : a.masonry({
        columnWidth: ".grid-sizer",
        itemSelector: ".masonry-col",
        gutter: ".gutter-sizer",
        transitionDuration: "1s"
      }), (device.tablet() || device.mobile()) && $("#nav-bar").hasClass("sticky-nav") && $("#nav-header").css("position", "relative"), $("#nav-bar").hasClass("sticky-nav"))
      if ($("#nav-bar").hasClass("top-bar")) {
        $("#nav-header").waypoint(function(a) {
          "down" === a ? device.tablet() || device.mobile() ? $("#nav-bar").addClass("stick-it") : $("#nav-bar").addClass("stick-it animated fadeInDownBig") : $("#nav-bar").removeClass("stick-it animated fadeInDownBig")
        }, {
          offset: "-100%"
        })
      } else if ($("#nav-bar").hasClass("bottom-bar")) {
      $("#nav-header").waypoint(function(a) {
        "down" === a ? device.tablet() || device.mobile() ? $("#nav-bar").addClass("stick-it") : $("#nav-bar").addClass("stick-it animated fadeInDownBig") : "up" === a && $("#nav-bar").removeClass("stick-it animated fadeInDownBig")
      }, {
        offset: "-145px"
      })
    }
    $("#menu-icon").waypoint(function(a) {
      "down" === a ? $("#sticky-menuicon").show() : $("#sticky-menuicon").hide()
    }, {
      offset: "-100%"
    });
    device.tablet() || device.mobile() || h() || $(".animation").each(function() {
      var a = this;
      new Waypoint({
        element: a,
        handler: function(a) {
          $(this.element).css({
            visibility: "visible"
          }), $(this.element).addClass("animated")
        },
        offset: "90%"
      })
    }), device.tablet() || device.mobile() || h() || g() || i() || ($(".image-divider").css("background-attachment", "fixed"), $(window).stellar({
      horizontalScrolling: !1,
      responsive: !0
    }))
  }), (g() || e()) && $(".heart-animation").css("letter-spacing", "normal"), $(".photo-item").bind("touchstart touchend", function(a) {});
  var k = new Date;
  if (k = new Date(2017, 1, 25, 13, 30), $("#countdown").countdown({
      until: k,
      format: "WDHMS"
    }), $("#countdown").countdown($.countdown.regionalOptions["custom-label"]), $("#date-countdown").countdown({
      until: k,
      format: "WDHMS"
    }), $("#mobile-nav").click(function(a) {
      a.preventDefault(), $("#nav-menu").toggleClass("open")
    }), $("#nav-menu li a").click(function() {
      "#" !== $(this).attr("href") && $("#nav-menu").removeClass("open")
    }), $(window).width() > 991 && $("#nav-menu").doubleTapToGo(), $("#gift-registry").length && ($("#gift-registry").owlCarousel({
      items: 3,
      autoPlay: 2e3,
      stopOnHover: !0,
      pagination: !0
    }), device.tablet() || device.mobile())) {
    var l = $("#gift-registry").data("owlCarousel");
    l.stop()
  }
  if ($("#events-carousel").length && ($("#events-carousel").owlCarousel({
      items: 2,
      itemsDesktopSmall: [979, 2],
      autoPlay: 2e3,
      stopOnHover: !0,
      pagination: !0,
      navigation: !1
    }), device.tablet() || device.mobile())) {
    var m = $("#events-carousel").data("owlCarousel");
    m.stop()
  }
  if ($("#registry-logo").length && ($("#registry-logo").owlCarousel({
      items: 3,
      autoPlay: 2e3,
      stopOnHover: !0,
      pagination: !1,
      navigation: !1
    }), device.tablet() || device.mobile())) {
    var n = $("#registry-logo").data("owlCarousel");
    n.stop()
  }
  if ($(".ajax-checkbox .custom-option-icon").click(function() {
      $(this).toggleClass("active-icon")
    }), $(".ajax-radio .custom-option-icon").click(function() {
      $(this).parent().hasClass("radio") ? ($(this).parent().siblings().children(".custom-option-icon").removeClass("active-icon"), $(this).addClass("active-icon")) : ($(this).siblings().removeClass("active-icon"), $(this).addClass("active-icon"))
    }), $("a.smooth-scroll").smoothScroll({
      speed: 1e3
    }), $(".nav-smooth-scroll a").smoothScroll({
      speed: 1e3,
      offset: -80
    }), $(".magnific-zoom").magnificPopup({
      type: "image",
      image: {
        titleSrc: "title"
      },
      callbacks: {
        open: function() {},
        afterClose: function() {}
      }
    }), $(".magnific-zoom-gallery").magnificPopup({
      type: "image",
      image: {
        titleSrc: "title"
      },
      gallery: {
        enabled: !0
      },
      callbacks: {
        open: function() {},
        afterClose: function() {}
      }
    }), $(".magnific-ajax").magnificPopup({
      type: "ajax",
      ajax: {
        settings: {
          cache: !1
        }
      },
      callbacks: {
        open: function() {},
        afterClose: function() {}
      }
    }), (device.tablet() || device.mobile()) && (f() || ($(".de-icon, .de-icon i").css("transition", "none"), $(".photo-item img.hover-animation").css("transition", "none"), $(".photo-item .layer.hover-animation").css("transition", "none"))), a() || b()) {
    var o = document.getElementById("audioID");
    if (null != o) {
      o.muted = !0;
      var p = $("#mute-audio").data("mute-icon"),
        q = $("#mute-audio").data("unmute-icon");
      $("#mute-audio").removeAttr("data-start").attr({
        "data-start": "mute"
      }), $("#mute-audio").removeAttr("data-mute-icon").attr({
        "data-mute-icon": q
      }), $("#mute-audio").removeAttr("data-unmute-icon").attr({
        "data-unmute-icon": p
      }), $("#mute-audio i").removeClass(), $("#mute-audio i").addClass(p)
    }
  }
  $("#mute-audio").click(function(a) {
    a.preventDefault();
    var c = document.getElementById("audioID"),
      d = $(this).data("start"),
      e = $(this).data("mute-icon"),
      f = $(this).data("unmute-icon");
    "unmute" == d ? $("#mute-audio i").hasClass(f) ? ($("#mute-audio i").removeClass(f), $("#mute-audio i").addClass(e), b() ? c.pause() : c.muted = !0) : ($("#mute-audio i").removeClass(e), $("#mute-audio i").addClass(f), c.play(), c.muted = !1) : "mute" == d && ($("#mute-audio i").hasClass(e) ? ($("#mute-audio i").removeClass(e), $("#mute-audio i").addClass(f), c.play(), c.muted = !1) : ($("#mute-audio i").removeClass(f), $("#mute-audio i").addClass(e), b() ? c.pause() : c.muted = !0))
  }), !device.tablet() && !device.mobile() || f() || $(".hide-control-onmobile").addClass("mobile"), (device.tablet() || device.mobile()) && $(".slide-video-control").hide(), $("#play-pause").click(function(a) {
    a.preventDefault();
    var b = $(".slide-video").data("vide").getVideoObject(),
      c = $(this).data("start"),
      d = $(this).data("pause-icon"),
      e = $(this).data("play-icon");
    "play" == c ? $("#play-pause i").hasClass(d) ? ($("#play-pause i").removeClass(d), $("#play-pause i").addClass(e), b.pause()) : ($("#play-pause i").removeClass(e), $("#play-pause i").addClass(d), b.play()) : "pause" == $(this).data("start") && ($("#play-pause i").hasClass(e) ? ($("#play-pause i").removeClass(e), $("#play-pause i").addClass(d), b.play()) : ($("#play-pause i").removeClass(d), $("#play-pause i").addClass(e), b.pause()))
  }), $("#mute").click(function(a) {
    a.preventDefault();
    var b = $(this).data("start"),
      c = $(this).data("mute-icon"),
      d = $(this).data("unmute-icon");
    "unmute" == b ? $("#mute i").hasClass(d) ? ($("#mute i").removeClass(d), $("#mute i").addClass(c), $(".slide-video video").prop("muted", !0)) : ($("#mute i").removeClass(c), $("#mute i").addClass(d), $(".slide-video video").prop("muted", !1)) : "mute" == b && ($("#mute i").hasClass(c) ? ($("#mute i").removeClass(c), $("#mute i").addClass(d), $(".slide-video video").prop("muted", !1)) : ($("#mute i").removeClass(d), $("#mute i").addClass(c), $(".slide-video video").prop("muted", !0)))
  })

});
