// кнопка каталога десктоп
const catalogBtn = document.getElementById('catalog-btn-call');

catalogBtn.addEventListener('click', () => {
  event.preventDefault();
  catalogBtn.classList.toggle('open');
  document.body.classList.toggle('catalog-menu-open');

  // Найти элемент с классом .overlay на странице
  const overlay = document.querySelector('.clickable-overlay');

  // Функция для закрытия меню
  function closeMenu() {
    catalogBtn.classList.remove('open');
    document.body.classList.remove('catalog-menu-open');
  }

  // Добавить обработчик событий для элемента .overlay
  overlay.addEventListener('click', () => {
    closeMenu();
    // Удалить обработчик событий после закрытия меню, чтобы избежать повторной регистрации
    overlay.removeEventListener('click', closeMenu);
  });
});




// кнопка каталога мобилка
const catalogBtnMob = document.getElementById('mob-catalog-btn-call');

catalogBtnMob.addEventListener('click', () => {
  catalogBtnMob.classList.toggle('open');
  document.body.classList.toggle('catalog-menu-open');
});

// // кнопка меню и кнопка поиска
const menuBtn = document.getElementById('menu-button');
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

// кнопки для раскрытия подпунктов в мобильном меню
const mobileSubMenuButtons = document.querySelectorAll('.mobile-menu__item--mod .button');
for (let item of mobileSubMenuButtons) {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
}

