const checkboxButtons = document.querySelectorAll('.checkbox-button');

for (let checkboxButton of checkboxButtons) {
  let checkbox = checkboxButton.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', function () {
    let label = checkboxButton.querySelector('label');
    if (this.checked) {
      label.textContent = 'Убрать';
    } else {
      label.textContent = 'Добавить';
    }
  });
};

