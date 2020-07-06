$(function(){

 $('.header__slider').slick({
      infinite: true,
      fade: true,
      prevArrow: ' <img class="slider-arrows slider-arrows__left" src="img/left.svg" alt="right">',
      nextArrow: ' <img class="slider-arrows slider-arrows__right" src="img/right.svg" alt="right">',
      asNavFor: '.slider-dots',
 });
 $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
 });
    
});