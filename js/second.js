new Swiper('.swip', {
    // стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // пагинация
    pagination: {
        el: '.swiper-pagination',
        // буллеты
        clickable: true,
        dynamicBullets: true,
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
    },

    slidesPerView: 2,

    watchOverflow: true,

    slidesPerGroup: 1,

    centeredSlides: false,

    initialSlide: 0,

    speed: 800,

    spaceBetween: 30,

    // effect: 'coverflow',

    // coverflowEffect: {
    //     rotate: 20,
    //     stretch: 50,
    //     slideShadow: false,
    // },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },

    slidesPerColumn: 2,

});

new Swiper('.swip2', {
    // pagination: {
    //     el: '.swiper-pagination',
    //     // буллеты
    //     // clickable: true,
    //     // dynamicBullets: true,
    //     // renderBullet: function (index, className) {
    //     //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     // },
    //     type: 'progressbar',
    // },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    keyboard: {
        enable: true,
        onlyInViewport: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    slidesPerView: 6,

    watchOverflow: true,

    slidesPerGroup: 1,

    centeredSlides: true,

    initialSlide: 2,

    speed: 250,

    spaceBetween: 30,

    direction: 'vertical',


});