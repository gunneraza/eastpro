import Swiper from 'swiper'
import 'swiper/swiper.scss'



window.addEventListener('DOMContentLoaded', () => {
    let products = new Swiper('.products-slider', {
        loop: true,
        navigation: {
            nextEl: '.product-button__next',
            prevEl: '.product-button__prev'
        }
    });
})