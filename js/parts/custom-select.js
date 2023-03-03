

// Get all custom select elements (Получение всех кастомных select)
var customSelects = document.querySelectorAll(".custom-select");

// Loop through each custom select (Перебираем каждый селект из коллекции)
customSelects.forEach(function(select) {
  // Get the selected item and options (Получение выбранного элемента и опций)
  var selected = select.querySelector(".custom-select__selected");
  var options = select.querySelector(".custom-select__options");

  // When the selected item is clicked, toggle the options (При нажатии на выбранный элемент переключаем опции)
  selected.addEventListener("click", function() {
    select.classList.toggle("open");
  });

  // When an option is clicked, update the selected item, update the hidden input field value, and close the options (При нажатии на опцию обновляем выбранный элемент, обновляем значение скрытого поля ввода и закрываем опции)
  var selectOptions = options.querySelectorAll(".custom-select__option");
  selectOptions.forEach(function(option) {
    option.addEventListener("click", function() {
      var value = this.getAttribute("value");
      selected.textContent = this.textContent;
      select.classList.remove("open");
      var input = select.querySelector("input[type=hidden]");
      input.value = value;
    });
  });

  // Set the default value of the selected item and update the hidden input field value (Установите значение по умолчанию для выбранного элемента и обновите значение скрытого поля ввода)
  var defaultValue = select.getAttribute("data-default");
  if (defaultValue) {
    selected.textContent = defaultValue;
    var defaultOption = options.querySelector('.custom-select__option[value="' + defaultValue + '"]');
    if (defaultOption) {
      var defaultOptionValue = defaultOption.getAttribute("value");
      var input = select.querySelector("input[type=hidden]");
      input.value = defaultOptionValue;
    }
  }

  // When the user clicks anywhere outside the select box, close the options (Когда пользователь щелкает в любом месте за пределами поля выбора, закрываем опции)
  document.addEventListener("click", function(event) {
    if (!select.contains(event.target)) {
      select.classList.remove("open");
    }
  });
});
