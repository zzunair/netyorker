$('.banner-wrapper').slick({
    dots: true,
    infinite: {{section.settings.infinite}},
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: {{section.settings.autoplay}},
    autoplaySpeed: {{section.settings.slider-speed}},
    fade: true,
    pauseOnHover: false
});