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