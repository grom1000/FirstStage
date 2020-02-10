window.onload = function () {

    var menu = document.querySelector('.menu');
    var hamburger = document.querySelector('.hamburger');
    var close = document.querySelector('.close');
    var backdrop = document.querySelector('.backdrop');
    var list = document.querySelector('.menu__list');
    var width = 0;
    var menuOpen = false;

    function browserSize() {
        width = window.innerWidth;
        if (width >= 769) {
            menuHide()
        } else if (width < 769 && menuOpen == true) {
            menuShow()
        }
    }

    function menuShow() {
        menuOpen = true
        menu.style.left = 0;
        backdrop.style.left = 0;
        backdrop.style.opacity = 1;
    }

    function menuHide() {
        menuOpen = false;
        menu.style.left = '-12.5rem';
        backdrop.style.left = '-100%';
        backdrop.style.opacity = 0;
    }

    hamburger.onclick = menuShow;
    close.onclick = menuHide;
    backdrop.onclick = menuHide;
    list.onclick = menuHide;
    window.onresize = browserSize;

    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', function (e) {
            if (e.target) {
                e.preventDefault();
            }
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        })

        close.addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        })

        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        })
    }

    var assistant = document.querySelector('.assistant__img');
    var online = document.querySelector('.assistant__online')
    var modalAssistant = document.querySelector('.popup');
    var closeAssistant = document.querySelector('.popup .popup_close');

    bindModal(assistant, modalAssistant, closeAssistant);
    bindModal(online, modalAssistant, closeAssistant);

}
