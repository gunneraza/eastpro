import Swiper from 'swiper'
import 'swiper/swiper.scss'


window.addEventListener('DOMContentLoaded', () => {
    let reviews = new Swiper('.news-slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.news-button_next',
            prevEl: '.news-button_pre'
        },
        pagination: {
            el: '.news-pagination',
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
            },

            768: {
                slidesPerView: 2
            },

            992: {
                slidesPerView: 3
            }
        }
    });
})