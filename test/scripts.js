function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateValues() {
  const fromValue = parseInt(thumbFrom.style.left || 0);
  const toValue = parseInt(thumbTo.style.left || 100);

  rangeFrom.textContent = Math.round(fromValue * (rangeMax - rangeMin) / 100 + rangeMin);
  rangeTo.textContent = Math.round(toValue * (rangeMax - rangeMin) / 100 + rangeMin);

  hiddenInputFrom.value = rangeFrom.textContent;
  hiddenInputTo.value = rangeTo.textContent;
}

function handleMove(e, thumb) {
  e.preventDefault();
  const sliderRect = e.target.parentElement.getBoundingClientRect();

  let newLeft = (e.clientX - sliderRect.left) / sliderRect.width * 100;

  // Ограничиваем передвижение бегунков
  const otherThumb = thumb === thumbFrom ? thumbTo : thumbFrom;
  const otherThumbLeft = parseInt(otherThumb.style.left || (otherThumb === thumbFrom ? 0 : 100));
  const minGap = 1;

  if (thumb === thumbFrom && newLeft >= otherThumbLeft - minGap) {
      newLeft = otherThumbLeft - minGap;
  } else if (thumb === thumbTo && newLeft <= otherThumbLeft + minGap) {
      newLeft = otherThumbLeft + minGap;
  }

  thumb.style.left = `${Math.round(newLeft)}%`;

  const fromValue = parseInt(thumbFrom.style.left || 0);
  const toValue = parseInt(thumbTo.style.left || 100);

  rangeProgress.style.left = `${Math.min(fromValue, toValue)}%`;
  rangeProgress.style.width = `${Math.abs(fromValue - toValue)}%`;

  updateValues();
}

function handleUp(e, thumb) {
  e.preventDefault();
  document.removeEventListener('mousemove', (event) => handleMove(event, thumb));
  document.removeEventListener('mouseup', (event) => handleUp(event, thumb));
}

const rangeMin = 0;
const rangeMax = 100;

const hiddenInputFrom = document.querySelector('.range__input_from');
const hiddenInputTo = document.querySelector('.range__input_to');
const thumbFrom = document.querySelector('.range__thumb_from');
const thumbTo = document.querySelector('.range__thumb_to');
const rangeFrom = document.querySelector('.range__value_from');
const rangeTo = document.querySelector('.range__value_to');
const rangeProgress = document.querySelector('.range__progress');

thumbFrom.addEventListener('mousedown', (e) => {
  e.preventDefault();
  document.addEventListener('mousemove', (event) => handleMove(event, thumbFrom));
  document.addEventListener('mouseup', (event) => handleUp(event, thumbFrom));
});

thumbTo.addEventListener('mousedown', (e) => {
  e.preventDefault();
  document.addEventListener('mousemove', (event) => handleMove(event, thumbTo));
  document.addEventListener('mouseup', (event) => handleUp(event, thumbTo));
});

updateValues();
