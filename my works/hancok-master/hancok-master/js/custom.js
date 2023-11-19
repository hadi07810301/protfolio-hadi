$(function(){
  "use strick"

  setTimeout(function () {
    $(".preloader").fadeToggle()
   }, 1800);


   AOS.init({
    duration: 1200,
    offset: 300,
   });

  // backtotop js 

  $(".backtotop i").on('click' , function(){
    $("html,body").animate({
      scrollTop:0
    },1200)
  })

  $(window).on('scroll' , function(){
    let scrolling = $(this).scrollTop()
    
    // backtotop js

    if(scrolling > 20){
      $(".backtotop i").fadeIn(500)
    }else{
      $(".backtotop i").fadeOut(500)
    }

    // navbar js

    if(scrolling > 50){
      $(".menu").addClass("menu_ex")
    }else{
      $(".menu").removeClass("menu_ex")
    }
  })


  $('.counter').counterUp({
    delay: 10,
    time: 1500
});

$('.game_slider_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow:'<i class="fa-solid fa-angle-right gmn "></i>',
  prevArrow:'<i class="fa-solid fa-angle-left gmp"></i>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows:false
      }
    }
  ]
});


new VenoBox({
  selector: '.my-video-links',
});

$('.sale_main_slider').slick({
  arrows:false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	

$('.slider').carousel({
  num: 5,
  maxWidth: 250,
  maxHeight: 300,
  distance: 20,
  scale: 0.9,
  animationTime: 500,
  showTime: 3000
});


$('.accesories_main_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
  nextArrow:'<i class="fa-solid fa-angle-right accen"></i>',
  prevArrow:'<i class="fa-solid fa-angle-left accep"></i>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




})