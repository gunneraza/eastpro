import '../scss/app.scss';

// Your JS Code goes here
import './header'
import './products'
import './reviews'
import './news'

import SmoothScroll from 'smooth-scroll'

let scroll = new SmoothScroll('a[href*="#"]');

let burger = document.querySelector('.mobile-button');
let menu = document.querySelector('.mobile-menu');

menu.addEventListener('click', event => {
    let target = event.target;

    if (target.tagName === 'A') {
        document.body.classList.toggle('menu-active')
    }
})

burger.addEventListener('click', event => {
    let target = event.target;

    document.body.classList.toggle('menu-active')

});


