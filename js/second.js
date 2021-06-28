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
            slidesPerColumn: 1,
        },
        480: {
            slidesPerView: 2,
            slidesPerColumn: 1,
        },
        992: {
            slidesPerView: 3,
            slidesPerColumn: 2,
        }
    },

    
    
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


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

const menuLinks = document.querySelectorAll('.main__menu__item[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header2').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }


            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}