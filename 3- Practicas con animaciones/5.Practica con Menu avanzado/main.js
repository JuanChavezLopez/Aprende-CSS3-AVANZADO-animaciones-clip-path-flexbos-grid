let enlaces = document.querySelector('.enlaces');
let menuHamburgueza =document.querySelector('.menu-hamburgueza');

// todo: reacciona al evebto click
menuHamburgueza.addEventListener('click', function(){
    enlaces.classList.toggle('enlaces1');
});