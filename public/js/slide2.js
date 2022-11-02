const swiper2 = new Swiper('.brandWrap', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect:"slide",
    
    //자동재생구간
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.nextBtn',
        prevEl: '.prevBtn',
    },
});