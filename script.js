// script.js

// Variabilă pentru a stoca poziția ultimei derulări (scroll) pe verticală
let lastScrollTop = 0;

// Selectăm bara de navigație după ID
const navbar = document.getElementById('navbar');

// Ascultăm evenimentul de scroll al ferestrei
window.addEventListener('scroll', function() {
    // Obținem poziția curentă de scroll pe verticală (compatibilitate cu browserele)
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Dacă se face scroll în jos (mai mult decât poziția anterioară)
    if (scrollTop > lastScrollTop) {
        // Ascundem navbar-ul, mutându-l în sus cu -90px (în afara ecranului)
        navbar.style.top = '-90px';
    } else {
        // Dacă se face scroll în sus, afișăm navbar-ul (top = 0)
        navbar.style.top = '0';
    }

    // Actualizăm poziția ultimului scroll
    lastScrollTop = scrollTop;
});

// Inițializăm sliderul Swiper
var swiper = new Swiper(".mySwiper", {
    loop: true, // Sliderul face buclă continuă
    navigation: {
        nextEl: ".swiper-button-next", // Butonul pentru slide-ul următor
        prevEl: ".swiper-button-prev", // Butonul pentru slide-ul anterior
    },
    pagination: {
        el: ".swiper-pagination", // Elementul pentru paginare (bulinele)
        clickable: true, // Permite click pe buline pentru navigare
    },
});
