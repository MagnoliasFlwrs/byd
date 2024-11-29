const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');

burgerBtn.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('active');
})
document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.burger-btn')) {
        if(mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
    }
})


const heroSwiper = document.querySelector('.hero-swiper');

if (heroSwiper) {
    const swiper = new Swiper(heroSwiper, {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: '.hero-swiper-pagination',
            clickable: true,
        },
    });
}

const modelsSwiper = document.querySelector('.models-swiper');

if (modelsSwiper) {
    const swiper = new Swiper(modelsSwiper, {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
        },

        breakpoints: {
            600:{
                slidesPerView:1.2
            },
            800: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView:2.2
            },
            1550: {
                slidesPerView:3
            }
        },
        navigation: {
            nextEl: '.models-swiper-button-next',
            prevEl: '.models-swiper-button-prev',
        }
    });
}

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 5) {
        header.classList.add('scrollable');
    }
    else {
        header.classList.remove('scrollable');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});