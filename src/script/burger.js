document.querySelector('.hamburger').onclick = menuShow;
document.querySelector('.menu').onclick = menuHide;

function menuShow() {
    document.querySelector('.menu').style.left = 0;
}

function menuHide() {
    document.querySelector('.menu').style.left = '-12.5rem';
}
