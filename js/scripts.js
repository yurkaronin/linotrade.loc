// Функции
// функция подключения скриптов
function includeFiles(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};
// функция модификации шапки
// function headerChange() {
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > 10) {
//     document.body.classList.add('header-sticky');
//   } else {
//     document.body.classList.remove('header-sticky');
//   }
// };

// Основная рабочая область
document.addEventListener("DOMContentLoaded", () => {




  // Проверяем состояние прокрутки страницы. если прокрутка есть - перекрашиваем шапку
  // headerChange();
  // отслеживаем событие прокрутки страницы > модификация шапки
  // document.addEventListener('scroll', e => {
  //   headerChange();
  // });

  // подключаем файлы тут
  includeFiles("./js/parts/buttons-animate.js");
  includeFiles("./js/parts/hover-animate.js");
  includeFiles("./js/parts/custom-select.js");
  includeFiles("./js/parts/catalog-button.js");


  // includeFiles("./js/parts/mobile-menu-show.js");
  // includeFiles("./js/parts/smoothscroll.js");
  // includeFiles("./js/parts/yandex.map.js");
  // includeFiles("./js/parts/swiper-collection.js");
  includeFiles("./js/parts/accordion.js");
  // includeFiles("./js/parts/input-phone-mask.js");
  // includeFiles("./js/parts/button-add.js");
  // includeFiles("./js/parts/channel-details.js");
  // includeFiles("./js/parts/modals.js");

  // небольшие программы
  // Проверяем состояние прокрутки страницы. если прокрутка есть - перекрашиваем шапку
  // headerChange();
  // отслеживаем событие прокрутки страницы > модификация шапки
  // document.addEventListener('scroll', e => {
  //   headerChange();
  // });

});

// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener('click', e => console.log(e.target));
