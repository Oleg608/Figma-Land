let burger = document.querySelector('.mobile-menu');
let burgerBtnOpen = document.querySelector('.js-mobile-menu-btn-open');
let burgerBtnClose = document.querySelector('.js-mobile-menu-btn-close');

let toggleBurger = () => burger.classList.toggle('is-open');

burgerBtnClose.addEventListener('click', toggleBurger);
burgerBtnOpen.addEventListener('click', toggleBurger);