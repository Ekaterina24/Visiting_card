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

new Swiper('.swip3', {
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

    // loop: true,

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

new Swiper('.swip4', {
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

    // loop: true,

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


// ФОРМА

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);


        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('../sendmail.php', {
                method: 'POST',
                body: formData
            });
            console.log(response);
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert("Ошибка");
                form.classList.remove('_sending');
            }
        } else {
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

});

// ОТЗЫВЫ

function openbox(box) {
    display = document.getElementById('box').style.display;
    if (display == "none") {
        document.getElementById('box').style.display = "block";
    } else {
        document.getElementById('box').style.display = "none";
    }
}

function openbox2(box2) {
    display = document.getElementById('box2').style.display;
    if (display == "none") {
        document.getElementById('box2').style.display = "block";
    } else {
        document.getElementById('box2').style.display = "none";
    }
}

function openbox3(box3) {
    display = document.getElementById('box3').style.display;
    if (display == "none") {
        document.getElementById('box3').style.display = "block";
    } else {
        document.getElementById('box3').style.display = "none";
    }
}

function openbox4(box4) {
    display = document.getElementById('box4').style.display;
    if (display == "none") {
        document.getElementById('box4').style.display = "block";
    } else {
        document.getElementById('box4').style.display = "none";
    }
}

// ВСЕ УСЛУГИ

function openservices(block) {
    display = document.getElementById('block').style.display;
    if (display == "none") {
        document.getElementById('block').style.display = "flex";
        document.getElementById('btn-all').style.display = "none";
    } else {
        document.getElementById('block').style.display = "none";
    }
}

// function handler(e) {
//     var el = e.target;
//     if (el.innerHTML == "Скрыть") {
//         el.innerHTML = "Все услуги";
//     } else {
//         el.innerHTML = "Скрыть";
//     }
// }


// ПОДРОБНЕЕ

function opentext(more) {
    display = document.getElementById('more').style.display;
    if (display == "none") {
        document.getElementById('more').style.display = "block";
        document.getElementById('btn-more').style.display = "none";
    } else {
        document.getElementById('more').style.display = "none";
    }
}
