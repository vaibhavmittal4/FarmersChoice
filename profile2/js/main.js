$(document).ready(function(){
    $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
    });

    $('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "fullScreen",
        "thumbs",
        "close"
    ],
    loop: true
    });

    $('.testimonial-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
        });

});

$(document).ready(function(){
    $('.video-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000 // Adjust autoplay speed as needed
    });
  });