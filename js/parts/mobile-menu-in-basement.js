
// Проверяем, что ширина экрана меньше или равна 680px и есть хотя бы один элемент с классом .footer__button
if (window.innerWidth <= 680 && document.querySelector('.footer__button')) {
  // Находим все элементы с классом .footer__menu-link-wrap
  const menuLinkWraps = document.querySelectorAll('.footer__menu-link-wrap');

  // Перебираем все найденные элементы
  menuLinkWraps.forEach((menuLinkWrap) => {
    // Проверяем, что после данного элемента идет элемент с классом .footer__submenu
    const nextElementSibling = menuLinkWrap.nextElementSibling;
    if (nextElementSibling && nextElementSibling.classList.contains('footer__submenu')) {
      // Находим элемент с классом .footer__button внутри текущего элемента
      const footerButton = menuLinkWrap.querySelector('.footer__button');

      // Если элемент с классом .footer__button найден
      if (footerButton) {
        // Добавляем обработчик события клика
        footerButton.addEventListener('click', () => {
          // По клику добавляем или удаляем класс .open элементу с классом .footer__menu-link-wrap
          menuLinkWrap.classList.toggle('open');
        });
      }
    }
  });
} else {
  console.log('Кнопок в мобильном меню подвала нет, или ширина экрана больше 680px');
}

