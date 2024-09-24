let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

//////// search /////////////
$(".search-btn").click(function(e) {
  e.preventDefault();
  $('.search-content').toggleClass('h-70');
  $('.search-btn').toggleClass('close-search');
});

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function(e) {
      e.preventDefault();
      $('.menu-bars .bar').toggleClass('hide-icon');
      $('.menu-bars .times').toggleClass('hide-icon');
      $(".navgition").toggleClass("reset-left");
      $(".language-dropdown").toggleClass("visible");
      $("body").toggleClass("overflow");
      $("html").toggleClass("overflow");

  });
  $(".nav-head .close-btn").click(function() {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
      $("html").removeClass("overflow");
  });
  
 
   //slide down menu
   $(".menu-item-has-children a").click(function(e) {
         
    $(this).siblings(".sub-menu ").slideToggle(400);
  //   $(".menu-item-has-children a").not(this).siblings(".sub-menu ").slideUp(400);
    if ($(window).width() <= 991) {
     
        $(this).toggleClass("active");
        $(".menu-item-has-children a").not(this).removeClass("active");
    }
});
}

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });

 


  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });


  ///////// **categories-section** /////////
  if ($(window).width() <= 991) {
var screen = new Swiper(".categories-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".categories-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".categories-slider .swiper-btn-next",
    prevEl: ".categories-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    992: {
      slidesPerView:5,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

/////////////// features swiper             /////////////////////
var screen = new Swiper(".features-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".features-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".features-slider .swiper-btn-next",
    prevEl: ".features-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView:4,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
})
  };
 
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });




 ///////// **best-seller-section** /////////
 var screen2 = new Swiper(".best-seller-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".best-seller-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".best-seller-slider .swiper-btn-next",
    prevEl: ".best-seller-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 26,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

 ///////// **offers-section** /////////

 var screen2 = new Swiper(".offers-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".offers-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".offers-slider .swiper-btn-next",
    prevEl: ".offers-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 26,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

///////// **new-arrival-section** /////////

var screen2 = new Swiper(".new-arrival-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".new-arrival-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".new-arrival-slider .swiper-btn-next",
    prevEl: ".new-arrival-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 26,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});



});

