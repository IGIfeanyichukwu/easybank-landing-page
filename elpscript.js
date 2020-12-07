const menuBtn = document.querySelector('.menu-btn');
const navUl = document.querySelector('#nav ul');
const modalBg = document.querySelector('.modal-bg');

console.log('Here:', menuBtn, navUl);
menuBtn.onclick = function () {
    if(menuBtn.classList.contains('open')) {
        menuBtn.classList.remove('open');
        navUl.classList.remove('show-nav');
        modalBg.classList.remove('show-modal-bg');
    } else {
        menuBtn.classList.add('open');
        navUl.classList.add('show-nav')
        modalBg.classList.add('show-modal-bg');   
    }
}

modalBg.onclick = function () {
    menuBtn.classList.remove('open');
    navUl.classList.remove('show-nav');
    modalBg.classList.remove('show-modal-bg');
}