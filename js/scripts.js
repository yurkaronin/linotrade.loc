// Функции
// функция подключения скриптов
function includeFiles(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};

// Основная рабочая область
document.addEventListener("DOMContentLoaded", () => {

  // подключаем файлы тут
  includeFiles("./js/parts/buttons-animate.js");
  includeFiles("./js/parts/hover-animate.js");
  includeFiles("./js/parts/custom-select.js");
  includeFiles("./js/parts/accordion.js");
  includeFiles("./js/parts/catalog-navigation.js");
  includeFiles("./js/parts/mobile-menu-in-basement.js");
  includeFiles("./js/parts/button-catalog-desktop.js");
  includeFiles("./js/parts/button-catalog-mobile.js");
  includeFiles("./js/parts/button-navigation-mobile.js");
  includeFiles("./js/parts/button-sub-navigation-mobile.js");
  includeFiles("./js/parts/button-search-mobile.js");

});

// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener('click', e => console.log(e.target));
