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
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // Инициализайия новостей!

  // Мобильная таблица!
   $(document).on('click', '.mobileTable__heading', function(){
    if(!$(this).hasClass('mobileTable__heading--active')){
      $('.mobileTable__heading').removeClass('mobileTable__heading--active');
      $('.mobileTable__content').slideUp();
      $(this).addClass('mobileTable__heading--active');
      $(this).siblings('.mobileTable__content').slideDown();
    }
   })
  // Мобильная таблица!

  // Плейсхолдеры!
  $(document).on('focus', 'input', function(){
    $(this).addClass('placeholder--off');
  })

  $(document).on('blur', 'input', function(){
    $(this).removeClass('placeholder--off');
  })
  // Плейсхолдеры!
});
