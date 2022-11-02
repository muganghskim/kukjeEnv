const swiper = new Swiper('.slideWrap', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect:"fade",
    
    //자동재생구간
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.circleBtn',
        clickable:true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.nextBtn',
        prevEl: '.prevBtn',
    },
});