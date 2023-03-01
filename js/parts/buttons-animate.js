// In this code, we first get all the buttons using document.querySelectorAll('.button') and add a mouseover event listener to each button using the forEach() method.

// Inside the event listener function, we get the position of the button using the getBoundingClientRect() method and calculate the position of the cursor relative to the button using e.clientX and e.clientY properties. Then, we set the position of the decoration element using decoration.style.left and decoration.style.top properties.

// В этом коде мы сначала получаем все кнопки с помощью document.querySelectorAll('.button') и добавляем слушатель события mouseover для каждой кнопки с помощью метода forEach().

// Внутри функции слушателя события мы получаем положение кнопки с помощью метода getBoundingClientRect() и вычисляем положение курсора относительно кнопки с помощью свойств e.clientX и e.clientY. Затем мы устанавливаем положение элемента украшения с помощью свойств:
// e.clientX
// e.clientY
// decoration.style.left
// decoration.style.top

// get all buttons
var buttons = document.querySelectorAll('.button');

// add mouseover event listener to each button
buttons.forEach(function (button) {
  button.addEventListener('mouseover', function (e) {
    // get button position
    var pos = button.getBoundingClientRect();
    var elem_left = pos.left;
    var elem_top = pos.top;

    // get cursor position relative to the button
    var Xinner = e.clientX - elem_left;
    var Yinner = e.clientY - elem_top;

    // set position of decoration element
    var decoration = button.querySelector('.decorate');
    decoration.style.left = Xinner + 'px';
    decoration.style.top = Yinner + 'px';
  });
});
