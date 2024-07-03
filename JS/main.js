Fancybox.bind("[data-fancybox]", {});
$(function () {
  $(".rateYo").rateYo({
    precision: 2,
  });
  var normalFill = $("#rateYo").rateYo("option", "precision");
  $("#rateYo").rateYo("option", "precision", 3);
});
$(function () {
  var mixer = mixitup(".blog__list");

  $(".blog__filter-btn").on("click", function name() {
    $(".blog__filter-btn").removeClass("blog__filter-btn--active");
    $(this).addClass("blog__filter-btn--active");
  });

  $(".testimonials__slider").slick({
    arrows: false,
    dots: true,
    appendDots: $(".testimonials__dots"),
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive:
    [
      {
        breakpoint: 1300,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  })
  $(".testimonials__prev").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickPrev");
  });
  $(".testimonials__next").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickNext");
  });

  $('.faq__acc-link').on('click', function(e){
    e.preventDefault()
    $(this).toggleClass('faq__acc-link--active')
    $(this).children('.faq__acc-txt').slideToggle()
  })

$(".header__nav-list, .footer__nav-list").on("click", "a", function(e){
  e.preventDefault();
  var id =$(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1000);
})


  setInterval(() => {
  if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false){
    $('.burger').addClass('burger--follow')
  }else{
    $('.burger').removeClass('burger--follow')
  }
}, 0)

$('.burger, .overlay').on('click', function(e){
  e.preventDefault()
  $('.header__top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--show')
})


});

