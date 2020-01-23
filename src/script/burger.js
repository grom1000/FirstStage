var menu = document.querySelector('.menu');
var hamburger = document.querySelector('.hamburger');
var close = document.querySelector('.close');
var promo = document.querySelector('.promo')
var backdrop = document.querySelector('.backdrop');
var overlay = document.querySelector('.overlay');
var list = document.querySelector('.menu__list');

function menuShow() {
    menu.style.left = 0;
    backdrop.style.left = 0;
    backdrop.style.opacity = 1;
}

function menuHide() {
    menu.style.left = '-12.5rem';
    backdrop.style.left = '-100%';
    backdrop.style.opacity = 0;
}

hamburger.onclick = menuShow;
close.onclick = menuHide;
backdrop.onclick = menuHide;
list.onclick = menuHide;
