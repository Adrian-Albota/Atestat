// script.js
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-90px'; // ascunde meniul
    } else {
        navbar.style.top = '0'; // afișează meniul
    }
    lastScrollTop = scrollTop;
});
