document.addEventListener('DOMContentLoaded', function () {
  // переключение вида списка товаров
  // Получаем все кнопки
  const buttons = document.querySelectorAll('.switch-catalog-view');

  // Проверяем, существуют ли кнопки на странице
  if (buttons.length > 0) {
    // Функция для сброса активного класса со всех кнопок
    function deactivateButtons() {
      buttons.forEach(button => button.classList.remove('active'));
    }

    // Добавляем обработчик событий на каждую кнопку
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        deactivateButtons(); // Сброс активного класса с других кнопок
        this.classList.add('active'); // Добавление активного класса на нажатую кнопку
        // Получаем значение data-атрибута и присваиваем его в качестве CSS-класса для тега body
        const viewMode = this.getAttribute('data-catalog-view');
        document.body.className = ''; // Сброс всех классов у body
        document.body.classList.add(viewMode); // Добавляем новый класс к body
      });
    });

    // Установка начальных параметров показа списка товаров как "список"
    // Находим кнопку с data-атрибутом catalog-view-tile
    const defaultViewButton = document.querySelector('.switch-catalog-view[data-catalog-view="catalog-view-tile"]');
    if (defaultViewButton) {
      defaultViewButton.classList.add('active'); // Делаем кнопку активной
      const defaultViewMode = defaultViewButton.getAttribute('data-catalog-view');
      document.body.classList.add(defaultViewMode); // Добавляем класс к body
    }
  }
  // КОНЕЦ переключение вида списка товаров


  // переключение порядка сортировки товаров в списке
  // Находим кнопку переключения порядка сортировки по селектору
  const sortingOrderButton = document.querySelector('.switch-sorting-order');

  // Проверяем, существует ли кнопка на странице
  if (sortingOrderButton) {
    // Устанавливаем начальные параметры сортировки на min-start
    sortingOrderButton.classList.add('min-start');
    sortingOrderButton.setAttribute('data-sort-status', 'min-start');
    document.body.classList.add('min-start-active');

    // Добавляем обработчик события клика на кнопку
    sortingOrderButton.addEventListener('click', function () {
      // Проверяем, есть ли у кнопки класс 'min-start'
      if (this.classList.contains('min-start')) {
        // Если есть, то удаляем его и добавляем класс 'max-start'
        this.classList.remove('min-start');
        this.classList.add('max-start');
        // Обновляем data-атрибут
        this.setAttribute('data-sort-status', 'max-start');
        // Удаляем класс у body и добавляем новый
        document.body.classList.remove('min-start-active');
        document.body.classList.add('max-start-active');
      } else {
        // Если 'min-start' нет, то добавляем его и удаляем 'max-start' (если он есть)
        this.classList.remove('max-start');
        this.classList.add('min-start');
        // Обновляем data-атрибут
        this.setAttribute('data-sort-status', 'min-start');
        // Удаляем класс у body и добавляем новый
        document.body.classList.remove('max-start-active');
        document.body.classList.add('min-start-active');
      }
    });
  }
  // КОНЕЦ переключение порядка сортировки товаров в списке



});
