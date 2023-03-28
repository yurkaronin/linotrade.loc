
var inputNumber = document.querySelector(".input-number");
var minusBtn = inputNumber.querySelector(".input-number__button--minus");
var plusBtn = inputNumber.querySelector(".input-number__button--plus");
var input = inputNumber.querySelector(".input-number__input");

minusBtn.addEventListener("click", function () {
  var currentValue = parseInt(input.value, 10) || 0;
  input.value = currentValue - 1;
});

plusBtn.addEventListener("click", function () {
  var currentValue = parseInt(input.value, 10) || 0;
  input.value = currentValue + 1;
});

