const filterGroups = document.querySelectorAll('.catalog-filter__group');

filterGroups.forEach(group => {
  const checkboxList = group.querySelector('.catalog-filter__checkbox-list');

  if (checkboxList) {
    const items = checkboxList.querySelectorAll('li');

    if (items.length > 5) {
      const showMoreButton = document.createElement('button');
      showMoreButton.classList.add('catalog-filter__show-more');
      showMoreButton.textContent = 'Смотреть еще';
      group.appendChild(showMoreButton);

      const updateItemsVisibility = (showAll) => {
        items.forEach((item, index) => {
          if (index >= 5) {
            item.style.display = showAll ? 'list-item' : 'none';
          }
        });

        showMoreButton.textContent = showAll ? 'Скрыть' : 'Смотреть еще';
        showMoreButton.setAttribute('data-expanded', showAll);
      };

      updateItemsVisibility(false);

      showMoreButton.addEventListener('click', () => {
        const isExpanded = showMoreButton.getAttribute('data-expanded') === 'true';
        updateItemsVisibility(!isExpanded);
      });
    }
  }
});


// раскрывашка для пункта фильтра

const groupLabels = document.querySelectorAll('.catalog-filter__group-label');

groupLabels.forEach(label => {
  // Добавляем класс .active по умолчанию
  label.classList.add('active');

  label.addEventListener('click', () => {
    label.classList.toggle('active');
  });
});



