// кнопка каталога десктоп
const catalogBtn = document.getElementById('catalog-btn-call');

catalogBtn.addEventListener('click', () => {
  catalogBtn.classList.toggle('open');
  document.body.classList.toggle('catalog-menu-open');
});

// кнопка каталога мобилка
const catalogBtnMob = document.getElementById('mob-catalog-btn-call');

catalogBtnMob.addEventListener('click', () => {
  catalogBtnMob.classList.toggle('open');
  document.body.classList.toggle('catalog-menu-open');
});

// // кнопка меню
// const menuBtn = document.getElementById('menu-button');

// menuBtn.addEventListener('click', () => {
//   menuBtn.classList.toggle('open');
//   document.body.classList.toggle('mobile-menu-open');
// });

// // кнопка поиска
// const searchBtn = document.getElementById('search-button');

// searchBtn.addEventListener('click', () => {
//   searchBtn.classList.toggle('open');
//   document.body.classList.toggle('mobile-search-open');
// });

// menu button
const menuBtn = document.getElementById('menu-button');
// search button
const searchBtn = document.getElementById('search-button');

menuBtn.addEventListener('click', () => {
  // toggle menu button class
  menuBtn.classList.toggle('open');
  // remove search button class if it exists
  searchBtn.classList.remove('open');
  document.body.classList.remove('mobile-search-open');
  // toggle body class for mobile menu
  document.body.classList.toggle('mobile-menu-open');
});

searchBtn.addEventListener('click', () => {
  // toggle search button class
  searchBtn.classList.toggle('open');
  // remove menu button class if it exists
  menuBtn.classList.remove('open');
  document.body.classList.remove('mobile-menu-open');
  // toggle body class for mobile search
  document.body.classList.toggle('mobile-search-open');
});




// кнопки в мобильном меню
// кнопка поиска
const mobileSubMenuButtons = document.querySelectorAll('.mobile-menu__item--mod .button');
for (let item of mobileSubMenuButtons) {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
}

