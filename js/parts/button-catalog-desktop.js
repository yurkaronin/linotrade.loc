// кнопка каталога десктоп
const catalogBtn = document.getElementById('catalog-btn-call');

catalogBtn.addEventListener('click', (event) => {
  event.preventDefault();

  //  если при этом открыто меню мобильной навигации - скрываем его
  document.querySelector('.button--menu').classList.remove('open');
  document.body.classList.remove('mobile-menu-open');

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
