$(document).ready(function () {
  // Инициализайия отзывов!
  $('.reviews').slick({
    infinite: true,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.reviews__tools--js .arrow--prev--js'),
    nextArrow: $('.reviews__tools--js .arrow--next--js'),
    appendDots: $('.reviews__tools--js .dots--js'),
  });
  // Инициализайия отзывов!

  // Инициализайия галерея!
  $('.gallery').slick({
    infinite: true,
    autoplay: false,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.gallery__tools--js .arrow--prev--js'),
    nextArrow: $('.gallery__tools--js .arrow--next--js'),
    appendDots: $('.gallery__tools--js .dots--js'),
  });
  // Инициализайия галерея!

  // Аккардион!
  $(document).on('click', '.questions__heading', function () {
    $(this).parent('.questions').toggleClass('questions--active');
    $(this).siblings('.questions__content').slideToggle();
  });
  // Аккардион!

  // Инициализайия новостей!
  $('.news').slick({
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.news__tools--js .arrow--prev--js'),
    nextArrow: $('.news__tools--js .arrow--next--js'),
    appendDots: $('.news__tools--js .dots--js'),
  });
  // Инициализайия новостей!
});
