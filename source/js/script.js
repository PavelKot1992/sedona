// Открытие меню в мобильной версии сайта

const toggleButton = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-header__nav');

mainNav.classList.remove('main-nav--nojs');

toggleButton.addEventListener('click', function() {
  if(mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.add('main-nav--opened');
    mainNav.classList.remove('main-nav--closed');
  }
  else if (mainNav.classList.contains('main-nav--opened')){
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});
