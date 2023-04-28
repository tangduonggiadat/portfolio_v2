
// To understand "{default_offset_pct:0.3}":
$(function() {
  $("#img1[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.3});
});

$(function() {
  $("#img2[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.5});
});

$(function() {
  $("#img3[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.8});
});

$(function() {
  $("#img4[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.5});
});

$(function() {
  $("#img5[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.5});
});


//Slider
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  swipeToSlide: true,
  touchThreshold: 5000
});
$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  touchThreshold: 5000,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});