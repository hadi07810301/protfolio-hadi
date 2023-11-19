$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling > 100){
      $(".nav_main").addClass("nav_bg")
  }else{
      $(".nav_main").removeClass("nav_bg")
  }
})


$('.banner_slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    asNavFor: '.banner_img1',
    autoplay: true,
    autoplaySpeed: 5000,


  });
$('.banner_img1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.banner_slick',
    prevArrow: '.up_arrow',
    nextArrow: '.down_arrow',
    autoplay: true,
    autoplaySpeed: 5000,

  });


  $('.logo_iteam').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
  $('.clt_slick_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    Arrows: true,
    prevArrow: '.left',
    nextArrow: '.right',
    autoplay: true,
    autoplaySpeed: 3000,

  });


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
  jQuery(window).on('scroll', function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });				
  jQuery('.progress-wrap').on('click', function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
  




  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 100){
        $(".nav_main").addClass("nav_bg")
    }else{
        $(".nav_main").removeClass("nav_bg")
    }



})


