
$(".i_main").click(function(){
  $(".box").toggleClass("tanvir")
})



$(window).scroll(function () {
  var scrolling = $(this).scrollTop()
  if (scrolling > 100) {
    $(".nav_main").addClass("nav_bg")
  } else {
    $(".nav_main").removeClass("nav_bg")
  }
})


//Scroll back to top

var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
var updateProgress = function () {
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var progress = pathLength - (scroll * pathLength / height);
  progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).scroll(updateProgress);
var offset = 50;
var duration = 550;
jQuery(window).on('scroll', function () {
  if (jQuery(this).scrollTop() > offset) {
    jQuery('.progress-wrap').addClass('active-progress');
  } else {
    jQuery('.progress-wrap').removeClass('active-progress');
  }
});
jQuery('.progress-wrap').on('click', function (event) {
  event.preventDefault();
  jQuery('html, body').animate({ scrollTop: 0 }, duration);
  return false;
})

$('.counter').counterUp({
  delay: 10,
  time: 1000
});



$('.rating_slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  Dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 998,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
  ]
});

$(window).on('load', function () {
  $('#preloader').delay(1000).fadeOut(1000)
})



AOS.init();



var typed = new Typed('#typed', {
  stringsElement: '#typed-strings'
});
