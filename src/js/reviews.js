import Swiper from 'swiper'
import 'swiper/swiper.scss'


window.addEventListener('DOMContentLoaded', () => {
    let reviews = new Swiper('.reviews-slider', {
        loop: true,
        navigation: {
            nextEl: '.review-button_left',
            prevEl: '.review-button_right'
        }
    });
})