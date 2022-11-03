const swiper2 = new Swiper('.brandWrap', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect:"slide",
    speed:4000,
    
    //자동재생구간
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.nextBtn',
        prevEl: '.prevBtn',
    },
});