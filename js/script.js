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

    slidesPerView: 3,

    watchOverflow: true,

    slidesPerGroup: 1,

    centeredSlides: true,

    initialSlide: 1,

    loop: true,

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

});


const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};


