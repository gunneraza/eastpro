let header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    let flag = header.classList.contains('active')

    if(pageYOffset > 100) {
        if(!flag) {
            header.classList.add('active');
        }
    } else {
        if(flag) {
            header.classList.remove('active');
        }
    }
});
